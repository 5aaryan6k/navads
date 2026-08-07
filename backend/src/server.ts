import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.routes';
import authRoutes from './routes/auth.routes';
import contentRoutes from './routes/content.routes';
import clientRoutes from './routes/client.routes';
import serviceRoutes from './routes/service.routes';
import inquiryRoutes from './routes/inquiry.routes';
import statsRoutes from './routes/stats.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/admin', statsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
