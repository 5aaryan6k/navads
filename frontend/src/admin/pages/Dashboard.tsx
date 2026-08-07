import { mockStats, mockInquiries, mockActivities } from "../api/mockData";
import { Link } from "react-router-dom";
import { Users, Briefcase, FileText, ArrowUpRight, Clock } from "lucide-react";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <div className="flex gap-2">
          <Link to="/admin/services/new" className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition">
            Add Service
          </Link>
          <Link to="/admin/inquiries" className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition shadow-sm">
            View Inquiries
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-500 text-sm font-medium">Total Inquiries</h3>
            <div className="h-10 w-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600">
              <Users size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-slate-900">{mockStats.totalInquiries}</span>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-emerald-600 flex items-center font-medium"><ArrowUpRight size={16} className="mr-1"/> 12%</span>
              <span className="text-slate-400 ml-2">vs last month</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-500 text-sm font-medium">New / Unread</h3>
            <div className="h-10 w-10 bg-amber-50 rounded-lg flex items-center justify-center text-amber-600">
              <Clock size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-slate-900">{mockStats.newInquiries}</span>
            <div className="mt-1 text-sm text-slate-500">Requires attention</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-500 text-sm font-medium">Active Services</h3>
            <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Briefcase size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-slate-900">{mockStats.activeServices}</span>
            <div className="mt-1 text-sm text-slate-500">Out of {mockStats.totalServices} total</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-slate-500 text-sm font-medium">Published Pages</h3>
            <div className="h-10 w-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
              <FileText size={20} />
            </div>
          </div>
          <div className="mt-4">
            <span className="text-3xl font-bold text-slate-900">{mockStats.publishedContent}</span>
            <div className="mt-1 text-sm text-slate-500">Live on website</div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Inquiries */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <h2 className="font-bold text-slate-800">Recent Inquiries</h2>
            <Link to="/admin/inquiries" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">View all</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockInquiries.map((inq) => (
                  <tr key={inq.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">{inq.name}</td>
                    <td className="px-6 py-4 text-slate-600">{inq.service}</td>
                    <td className="px-6 py-4 text-slate-500">{new Date(inq.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        inq.status === 'New' ? 'bg-amber-100 text-amber-800' :
                        inq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                        'bg-slate-100 text-slate-800'
                      }`}>
                        {inq.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Log */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-4 border-b border-slate-200">
            <h2 className="font-bold text-slate-800">Recent Activity</h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {mockActivities.map((act, i) => (
                <div key={act.id} className="flex gap-4 relative">
                  {i !== mockActivities.length - 1 && (
                    <div className="absolute top-8 left-4 w-px h-full -ml-px bg-slate-200"></div>
                  )}
                  <div className="relative flex-shrink-0 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white ring-1 ring-slate-200">
                    <span className="text-xs font-bold text-slate-600">{act.user.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-900">{act.user}</span> {act.action} <span className="font-medium text-slate-900">{act.target}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{new Date(act.date).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
