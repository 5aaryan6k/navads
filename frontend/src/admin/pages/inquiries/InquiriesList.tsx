import { useState } from "react";
import { mockInquiries } from "../../api/mockData";
import { Search, Filter, Eye, MessageSquare, Phone, Mail } from "lucide-react";

export function InquiriesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = mockInquiries.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          i.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Contact Inquiries</h1>
        <p className="text-sm text-slate-500">Manage messages and leads from the website.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50">
          <div className="relative w-full sm:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or service..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="w-full sm:w-auto flex items-center gap-3">
            <span className="text-sm font-medium text-slate-700 hidden sm:block">Status:</span>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-40 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Contact Details</th>
                <th className="px-6 py-4 font-semibold">Service</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((inq) => (
                <tr key={inq.id} className="border-b border-slate-100 hover:bg-slate-50/50 transition">
                  <td className="px-6 py-4 font-medium text-slate-900">{inq.name}</td>
                  <td className="px-6 py-4 space-y-1">
                    <div className="flex items-center text-xs text-slate-600 gap-1.5"><Mail size={12} className="text-slate-400"/> {inq.email}</div>
                    <div className="flex items-center text-xs text-slate-600 gap-1.5"><Phone size={12} className="text-slate-400"/> {inq.phone}</div>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2 py-1 rounded text-xs font-medium">
                      <Briefcase size={12} className="text-slate-500"/>
                      {inq.service}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {new Date(inq.date).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      className={`text-xs font-semibold rounded-full px-2 py-1 border-none focus:ring-0 cursor-pointer ${
                        inq.status === 'New' ? 'bg-amber-100 text-amber-800' :
                        inq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                        inq.status === 'Closed' ? 'bg-slate-100 text-slate-600' :
                        'bg-emerald-100 text-emerald-800'
                      }`}
                      defaultValue={inq.status}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded transition font-medium flex items-center justify-end gap-1.5 ml-auto">
                      <Eye size={16} /> View
                    </button>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    No inquiries found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
