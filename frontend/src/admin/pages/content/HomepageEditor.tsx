import { useState } from "react";
import { Save } from "lucide-react";

export function HomepageEditor() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Homepage content saved successfully!");
    }, 800);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Homepage Content</h1>
        <p className="text-sm text-slate-500">Manage the hero section and main messaging.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hero Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Hero Section</h3>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Hero Title</label>
            <input type="text" defaultValue="Excellence in Industrial Solutions" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Hero Subtitle</label>
            <textarea rows={3} defaultValue="Delivering world-class construction, facility management, and professional services across Saudi Arabia with uncompromising quality." className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Primary Button Text</label>
              <input type="text" defaultValue="Explore Services" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Secondary Button Text</label>
              <input type="text" defaultValue="Contact Us" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none" />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
          <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-3">Why Choose Us</h3>
          
          <div className="space-y-4">
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Feature 1</label>
              <input type="text" defaultValue="Quality Workmanship" className="w-full px-3 py-1.5 border border-slate-300 rounded-md mb-2 outline-none text-sm" />
              <input type="text" defaultValue="Premium materials and expert execution" className="w-full px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
            </div>
            
            <div className="p-4 border border-slate-200 rounded-lg bg-slate-50">
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Feature 2</label>
              <input type="text" defaultValue="Reliable Delivery" className="w-full px-3 py-1.5 border border-slate-300 rounded-md mb-2 outline-none text-sm" />
              <input type="text" defaultValue="On-time project completion guaranteed" className="w-full px-3 py-1.5 border border-slate-300 rounded-md outline-none text-sm text-slate-600" />
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
