import { useState } from "react";
import { mockServices } from "../../api/mockData";
import { Link } from "react-router-dom";
import { Search, Plus, Edit, Trash2, Filter, MoreVertical } from "lucide-react";

export function ServicesList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = mockServices.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Services</h1>
          <p className="text-sm text-slate-500">Manage the services offered on your website.</p>
        </div>
        <Link to="/admin/services/new" className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition flex items-center gap-2 shadow-sm">
          <Plus size={16} /> Add Service
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50">
          <div className="relative w-full sm:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search services..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition">
            <Filter size={16} /> Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Service Name</th>
                <th className="px-6 py-4 font-semibold">Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Last Updated</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((service) => (
                <tr key={service.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{service.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">/{service.slug}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">{service.category}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      service.status === 'Published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
                    }`}>
                      {service.status === 'Published' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>}
                      {service.status === 'Draft' && <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mr-1.5"></span>}
                      {service.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(service.updatedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded transition" title="Edit">
                        <Edit size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition" title="Delete">
                        <Trash2 size={16} />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded transition">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                    No services found matching "{searchTerm}"
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination placeholder */}
        <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50">
          <span className="text-sm text-slate-500">Showing 1 to {filtered.length} of {mockServices.length} results</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-300 rounded text-sm disabled:opacity-50" disabled>Prev</button>
            <button className="px-3 py-1 border border-slate-300 rounded text-sm disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
