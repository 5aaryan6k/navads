import { useState, useEffect } from "react";
import { Search, Eye, Mail, Phone, Briefcase, Trash2, X, AlertTriangle, CheckSquare, Square } from "lucide-react";
import { apiClient } from "../../api/client";

export function InquiriesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<any | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      const data = await apiClient.get('/inquiries');
      setInquiries(data);
    } catch (error) {
      console.error("Failed to fetch inquiries", error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      await apiClient.put(`/inquiries/${id}/status`, { status: newStatus });
      setInquiries(inquiries.map(i => i.id === id ? { ...i, status: newStatus } : i));
      if (selectedInquiry?.id === id) {
        setSelectedInquiry((prev: any) => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (error) {
      console.error("Failed to update status", error);
      alert("Failed to update status");
    }
  };

  const deleteSingleInquiry = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to delete inquiry from "${name}"?`)) return;
    try {
      await apiClient.delete(`/inquiries/${id}`);
      setInquiries(inquiries.filter(i => i.id !== id));
      setSelectedIds(selectedIds.filter(sId => sId !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    } catch (error) {
      console.error("Failed to delete inquiry", error);
      alert("Failed to delete inquiry");
    }
  };

  const deleteSelectedInquiries = async () => {
    if (selectedIds.length === 0) return;
    if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} selected inquiries?`)) return;

    try {
      for (const id of selectedIds) {
        await apiClient.delete(`/inquiries/${id}`);
      }
      setInquiries(inquiries.filter(i => !selectedIds.includes(i.id)));
      setSelectedIds([]);
    } catch (error) {
      console.error("Failed to delete selected inquiries", error);
      alert("Failed to delete some inquiries");
    }
  };

  const filtered = inquiries.filter(i => {
    const matchesSearch = i.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          i.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          i.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || i.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const allFilteredSelected = filtered.length > 0 && filtered.every(i => selectedIds.includes(i.id));

  const toggleSelectAll = () => {
    if (allFilteredSelected) {
      const filteredIdSet = new Set(filtered.map(i => i.id));
      setSelectedIds(selectedIds.filter(id => !filteredIdSet.has(id)));
    } else {
      const combined = new Set([...selectedIds, ...filtered.map(i => i.id)]);
      setSelectedIds(Array.from(combined));
    }
  };

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sId => sId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contact Inquiries</h1>
          <p className="text-sm text-slate-500">Manage customer messages, status updates, and leads.</p>
        </div>
        {selectedIds.length > 0 && (
          <button 
            onClick={deleteSelectedInquiries}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition self-start sm:self-auto"
          >
            <Trash2 size={16} /> Delete Selected ({selectedIds.length})
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50/70">
          <div className="relative w-full sm:w-72">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, email, service..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            />
          </div>
          <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3">
            <span className="text-sm font-medium text-slate-700">Status:</span>
            <select 
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-40 px-3 py-2 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white"
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Selected Banner */}
        {selectedIds.length > 0 && (
          <div className="px-6 py-3 bg-red-50 border-b border-red-100 flex items-center justify-between text-xs text-red-800 font-medium">
            <span>{selectedIds.length} inquiry items selected</span>
            <button onClick={() => setSelectedIds([])} className="underline hover:text-red-900">
              Deselect all
            </button>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-4 w-10 text-center">
                  <input 
                    type="checkbox"
                    checked={allFilteredSelected}
                    onChange={toggleSelectAll}
                    className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Contact Details</th>
                <th className="px-6 py-4 font-semibold">Service</th>
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    Loading inquiries...
                  </td>
                </tr>
              ) : filtered.map((inq) => {
                const isSelected = selectedIds.includes(inq.id);
                return (
                  <tr 
                    key={inq.id} 
                    className={`border-b border-slate-100 transition ${
                      isSelected ? "bg-emerald-50/40" : "hover:bg-slate-50/50"
                    }`}
                  >
                    <td className="px-4 py-4 text-center">
                      <input 
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleSelect(inq.id)}
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">{inq.name}</td>
                    <td className="px-6 py-4 space-y-1">
                      <div className="flex items-center text-xs text-slate-600 gap-1.5"><Mail size={12} className="text-slate-400"/> {inq.email}</div>
                      <div className="flex items-center text-xs text-slate-600 gap-1.5"><Phone size={12} className="text-slate-400"/> {inq.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-lg text-xs font-medium border border-slate-200">
                        <Briefcase size={12} className="text-slate-500"/>
                        {inq.service}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-xs">
                      {new Date(inq.createdAt).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' })}
                    </td>
                    <td className="px-6 py-4">
                      <select 
                        value={inq.status}
                        onChange={(e) => updateStatus(inq.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2.5 py-1 border-none focus:ring-0 cursor-pointer ${
                          inq.status === 'New' ? 'bg-amber-100 text-amber-800' :
                          inq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                          inq.status === 'Closed' ? 'bg-slate-100 text-slate-600' :
                          'bg-emerald-100 text-emerald-800'
                        }`}
                      >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Closed">Closed</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => setSelectedInquiry(inq)}
                          className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg transition font-medium flex items-center gap-1 text-xs"
                          title="View Inquiry"
                        >
                          <Eye size={15} /> View
                        </button>
                        <button 
                          onClick={() => deleteSingleInquiry(inq.id, inq.name)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                          title="Delete Inquiry"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                    No inquiries found matching criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg">Inquiry Details</h3>
              <button 
                onClick={() => setSelectedInquiry(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="py-4 space-y-4 text-sm">
              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Customer Name</label>
                <p className="font-semibold text-slate-900 text-base">{selectedInquiry.name}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Email</label>
                  <p className="text-slate-700 font-medium flex items-center gap-1.5">
                    <Mail size={14} className="text-slate-400" /> {selectedInquiry.email}
                  </p>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Phone</label>
                  <p className="text-slate-700 font-medium flex items-center gap-1.5">
                    <Phone size={14} className="text-slate-400" /> {selectedInquiry.phone}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Requested Service</label>
                <span className="inline-block bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg font-semibold text-xs">
                  {selectedInquiry.service}
                </span>
              </div>

              {selectedInquiry.message && (
                <div>
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">Message Content</label>
                  <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 leading-relaxed">
                    {selectedInquiry.message}
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button 
                onClick={() => deleteSingleInquiry(selectedInquiry.id, selectedInquiry.name)}
                className="text-red-600 hover:text-red-700 font-medium text-xs flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-red-50 transition"
              >
                <Trash2 size={14} /> Delete Inquiry
              </button>
              <button 
                onClick={() => setSelectedInquiry(null)}
                className="bg-slate-900 text-white px-5 py-2 rounded-xl text-xs font-semibold hover:bg-slate-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
