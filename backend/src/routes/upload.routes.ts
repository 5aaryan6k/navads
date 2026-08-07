import { Router, Request, Response } from 'express';
import multer from 'multer';
import { createClient } from '@supabase/supabase-js';
import path from 'path';

const router = Router();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// We will only create the client if the keys exist, otherwise uploads will fail
const supabase = supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

// Use MemoryStorage instead of DiskStorage for serverless environments
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    if (!supabase) {
      console.error("Missing SUPABASE_URL or SUPABASE_KEY in .env");
      return res.status(500).json({ error: 'Storage is not configured' });
    }

    const fileExt = path.extname(req.file.originalname);
    const fileName = `${Date.now()}-${Math.round(Math.random() * 1E9)}${fileExt}`;
    
    // Upload to Supabase Storage bucket named 'uploads'
    const { data, error } = await supabase
      .storage
      .from('uploads')
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
        upsert: false
      });

    if (error) {
      console.error('Supabase upload error:', error);
      return res.status(500).json({ error: 'Failed to upload to storage' });
    }

    // Get the public URL for the uploaded file
    const { data: { publicUrl } } = supabase
      .storage
      .from('uploads')
      .getPublicUrl(fileName);

    res.json({ url: publicUrl });
  } catch (error) {
    console.error('Upload route error:', error);
    res.status(500).json({ error: 'Internal server error during upload' });
  }
});

export default router;
