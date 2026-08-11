import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { apiClient } from "../../api/client";

export function CEOMessageEditor() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({
    name: 'Abu Rayyan',
    position: 'Chief Executive Officer',
    message: '"At Navi Ads Company, our vision is built on the foundation of unwavering trust and uncompromising quality. We take pride in contributing to the growth of Saudi Arabia by delivering exceptional industrial and commercial services that stand the test of time."',
    published: 'true'
  });

  useEffect(() => {
    apiClient.get('/content').then(data => {
      if (data.ceo) {
        setContent(prev => ({ ...prev, ...data.ceo }));
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updates = Object.entries(content).map(([key, value]) => ({
        section: 'ceo', key, value: String(value)
      }));
      await apiClient.put('/content', { updates });
      alert("CEO Message saved successfully!");
    } catch (error) {
      alert("Failed to save content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CEO Message</h1>
        <p className="text-sm text-slate-500">Manage the management message details.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Message Details</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
              <input type="text" value={content.name} onChange={e => setContent({...content, name: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Position Title</label>
              <input type="text" value={content.position} onChange={e => setContent({...content, position: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">The Message</label>
            <textarea rows={6} value={content.message} onChange={e => setContent({...content, message: e.target.value})} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-y"></textarea>
          </div>
          
          <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
            <input type="checkbox" id="publish" checked={content.published === 'true'} onChange={e => setContent({...content, published: e.target.checked ? 'true' : 'false'})} className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
            <label htmlFor="publish" className="text-sm font-medium text-slate-700">Publish this section on the website</label>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button type="submit" disabled={loading} className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition flex items-center gap-2">
            <Save size={18} /> {loading ? "Saving..." : "Publish Changes"}
          </button>
        </div>
      </form>
    </div>
  );
}
