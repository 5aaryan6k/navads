import { useState } from "react";
import { Save, Image as ImageIcon } from "lucide-react";

export function CEOMessageEditor() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("CEO Message saved successfully!");
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">CEO Message</h1>
        <p className="text-sm text-slate-500">Manage the management message and photo.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Photo Upload */}
          <div className="md:col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">CEO Photo</h3>
            
            <div className="aspect-[4/5] rounded-xl border-2 border-slate-200 border-dashed flex flex-col items-center justify-center text-slate-400 bg-slate-50 hover:bg-slate-100 transition cursor-pointer overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Current" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale hover:opacity-100" />
              <div className="relative z-10 flex flex-col items-center bg-white/80 p-3 rounded-lg shadow-sm">
                <ImageIcon size={24} className="mb-2 text-slate-600" />
                <span className="text-xs font-medium text-slate-700">Change Photo</span>
              </div>
            </div>
            <p className="text-xs text-slate-500 text-center">Recommended size: 800x1000px</p>
          </div>

          {/* Details */}
          <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
            <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Message Details</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input type="text" defaultValue="Abu Rayyan" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Position Title</label>
                <input type="text" defaultValue="Chief Executive Officer" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">The Message</label>
              <textarea rows={6} defaultValue='"At Navi Ads Company, our vision is built on the foundation of unwavering trust and uncompromising quality. We take pride in contributing to the growth of Saudi Arabia by delivering exceptional industrial and commercial services that stand the test of time."' className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-y"></textarea>
            </div>
            
            <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-200">
              <input type="checkbox" id="publish" defaultChecked className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500" />
              <label htmlFor="publish" className="text-sm font-medium text-slate-700">Publish this section on the website</label>
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
