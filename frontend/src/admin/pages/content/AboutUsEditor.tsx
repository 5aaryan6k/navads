import { useState, useEffect } from "react";
import { Save } from "lucide-react";
import { apiClient } from "../../api/client";

export function AboutUsEditor() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({
    title: 'Building Trust Through Quality',
    p1: 'Navi Ads Company is a trusted provider of professional services including cleaning, painting, welding, and labour solutions.',
    p2: 'Our commitment to premium quality and reliable delivery has made us a preferred partner for industrial and commercial projects.',
    stat1: '500+', stat1Desc: 'Completed Projects',
    stat2: '150+', stat2Desc: 'Expert Professionals',
    stat3: '100%', stat3Desc: 'Client Satisfaction',
    stat4: '15+', stat4Desc: 'Years Experience'
  });

  useEffect(() => {
    apiClient.get('/content').then(data => {
      if (data.about) {
        setContent(prev => ({ ...prev, ...data.about }));
      }
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updates = Object.entries(content).map(([key, value]) => ({
        section: 'about', key, value
      }));
      await apiClient.put('/content', { updates });
      alert("About Us content saved successfully!");
    } catch (error) {
      alert("Failed to save content");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">About Us Content</h1>
        <p className="text-sm text-slate-500">Manage company introduction and statistics.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Company Overview</h3>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Section Title</label>
            <input type="text" value={content.title} onChange={e => setContent({ ...content, title: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Paragraph 1</label>
            <textarea rows={4} value={content.p1} onChange={e => setContent({ ...content, p1: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Paragraph 2</label>
            <textarea rows={3} value={content.p2} onChange={e => setContent({ ...content, p2: e.target.value })} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Company Statistics</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 1</label>
              <div className="flex gap-2">
                <input type="text" value={content.stat1} onChange={e => setContent({ ...content, stat1: e.target.value })} className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" value={content.stat1Desc} onChange={e => setContent({ ...content, stat1Desc: e.target.value })} className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 2</label>
              <div className="flex gap-2">
                <input type="text" value={content.stat2} onChange={e => setContent({ ...content, stat2: e.target.value })} className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" value={content.stat2Desc} onChange={e => setContent({ ...content, stat2Desc: e.target.value })} className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 3</label>
              <div className="flex gap-2">
                <input type="text" value={content.stat3} onChange={e => setContent({ ...content, stat3: e.target.value })} className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" value={content.stat3Desc} onChange={e => setContent({ ...content, stat3Desc: e.target.value })} className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 4</label>
              <div className="flex gap-2">
                <input type="text" value={content.stat4} onChange={e => setContent({ ...content, stat4: e.target.value })} className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" value={content.stat4Desc} onChange={e => setContent({ ...content, stat4Desc: e.target.value })} className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>
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
