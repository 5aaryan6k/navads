import { useState } from "react";
import { Save } from "lucide-react";

export function AboutUsEditor() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("About Us content saved successfully!");
    }, 800);
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
            <input type="text" defaultValue="Building Trust Through Quality" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Paragraph 1</label>
            <textarea rows={4} defaultValue="Navi Ads Company is a trusted provider of professional services including cleaning, painting, welding, and labour solutions. Based in Riyadh, Saudi Arabia, we serve clients across the Kingdom with dedication and excellence." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Paragraph 2</label>
            <textarea rows={3} defaultValue="Our commitment to premium quality and reliable delivery has made us a preferred partner for industrial and commercial projects." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Company Statistics</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 1</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="500+" className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" defaultValue="Completed Projects" className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>
            
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 2</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="150+" className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" defaultValue="Expert Professionals" className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>
            
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 3</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="100%" className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" defaultValue="Client Satisfaction" className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
              </div>
            </div>

            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Stat 4</label>
              <div className="flex gap-2">
                <input type="text" defaultValue="15+" className="w-1/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm font-bold" />
                <input type="text" defaultValue="Years Experience" className="w-2/3 px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
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
