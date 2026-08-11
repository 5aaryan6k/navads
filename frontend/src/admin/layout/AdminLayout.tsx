import { useState, useEffect, useRef } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, MessageSquare, Menu, X, LogOut, Search, Bell, Check, ExternalLink, Clock
} from "lucide-react";
import { apiClient } from "../api/client";

export function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopCollapsed, setDesktopCollapsed] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [inquiries, setInquiries] = useState<any[]>([]);
  const notifRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      navigate("/admin/login");
    } else {
      fetchNotifications();
    }
  }, [navigate]);

  const fetchNotifications = async () => {
    try {
      const data = await apiClient.get('/inquiries');
      if (Array.isArray(data)) {
        setInquiries(data);
      }
    } catch (err) {
      console.warn("Failed to fetch notification inquiries", err);
    }
  };

  // Close mobile menu & notifications popover on route change
  useEffect(() => {
    setMobileOpen(false);
    setNotificationsOpen(false);
  }, [location.pathname]);

  // Click outside to close notifications
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("admin_auth");
    navigate("/");
  };

  const markAllAsRead = async () => {
    const unread = inquiries.filter(i => i.status === 'New');
    setInquiries(inquiries.map(i => i.status === 'New' ? { ...i, status: 'Contacted' } : i));
    
    for (const inq of unread) {
      try {
        await apiClient.put(`/inquiries/${inq.id}/status`, { status: 'Contacted' });
      } catch (err) {
        console.error("Failed to update status", err);
      }
    }
  };

  const unreadInquiries = inquiries.filter(i => i.status === 'New');

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row relative overflow-x-hidden">
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar (Mobile drawer + Desktop collapsible sidebar) */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50 bg-slate-900 text-slate-300 flex flex-col 
          transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"}
          ${desktopCollapsed ? "lg:w-20" : "lg:w-64"}
        `}
      >
        <div className="h-16 flex items-center justify-between px-4 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              N
            </div>
            {(!desktopCollapsed || mobileOpen) && (
              <span className="text-white font-bold text-lg tracking-wide">NAVI ADMIN</span>
            )}
          </div>
          <button 
            className="lg:hidden text-slate-400 hover:text-white p-1 rounded-lg focus:outline-none" 
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              const isCollapsed = desktopCollapsed && !mobileOpen;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center px-3 py-2.5 text-sm font-medium rounded-xl transition-colors
                    ${isActive ? "bg-emerald-600 text-white shadow-sm" : "hover:bg-slate-800 hover:text-white text-slate-300"}
                    ${isCollapsed ? "justify-center" : "justify-start"}
                  `}
                  title={isCollapsed ? item.name : undefined}
                >
                  <item.icon className={`flex-shrink-0 h-5 w-5 ${isCollapsed ? "" : "mr-3"}`} />
                  {!isCollapsed && <span>{item.name}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-3 bg-slate-950 border-t border-slate-800">
          <button 
            onClick={handleLogout} 
            className={`
              flex w-full items-center px-3 py-2.5 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors
              ${desktopCollapsed && !mobileOpen ? "justify-center" : "justify-start"}
            `}
            title={desktopCollapsed && !mobileOpen ? "Logout" : undefined}
          >
            <LogOut className={`flex-shrink-0 h-5 w-5 ${desktopCollapsed && !mobileOpen ? "" : "mr-3"}`} />
            {(!desktopCollapsed || mobileOpen) && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-30 sticky top-0">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger button */}
            <button 
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition" 
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} />
            </button>
            
            {/* Desktop collapse toggle button */}
            <button 
              className="hidden lg:block p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition" 
              onClick={() => setDesktopCollapsed(!desktopCollapsed)}
            >
              <Menu size={20} />
            </button>

            <div className="flex items-center bg-slate-100 rounded-xl px-3 py-1.5 hidden md:flex border border-slate-200">
              <Search size={16} className="text-slate-400 mr-2" />
              <input type="text" placeholder="Search inquiries..." className="bg-transparent border-none outline-none text-sm w-48 text-slate-700 placeholder-slate-400" />
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            {/* Notification Bell Dropdown */}
            <div className="relative" ref={notifRef}>
              <button 
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 text-slate-500 hover:text-slate-800 relative rounded-xl hover:bg-slate-100 transition focus:outline-none"
                title="Notifications"
              >
                <Bell size={20} />
                {unreadInquiries.length > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-2 ring-white animate-pulse">
                    {unreadInquiries.length}
                  </span>
                )}
              </button>

              {/* Notification Popover Dropdown */}
              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-slate-900 text-sm">Notifications</h3>
                      {unreadInquiries.length > 0 && (
                        <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {unreadInquiries.length} New
                        </span>
                      )}
                    </div>
                    {unreadInquiries.length > 0 && (
                      <button 
                        onClick={markAllAsRead} 
                        className="text-xs text-emerald-600 hover:text-emerald-700 font-medium flex items-center gap-1 hover:underline"
                      >
                        <Check size={14} /> Mark all read
                      </button>
                    )}
                  </div>

                  <div className="max-h-80 overflow-y-auto divide-y divide-slate-100">
                    {inquiries.slice(0, 6).map((inq) => (
                      <div 
                        key={inq.id}
                        onClick={() => {
                          setNotificationsOpen(false);
                          navigate('/admin/inquiries');
                        }}
                        className={`p-4 hover:bg-slate-50 transition cursor-pointer flex gap-3 items-start ${
                          inq.status === 'New' ? 'bg-amber-50/40' : ''
                        }`}
                      >
                        <div className={`mt-0.5 h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          inq.status === 'New' ? 'bg-amber-100 text-amber-700 font-bold text-xs' : 'bg-slate-100 text-slate-500'
                        }`}>
                          {inq.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-xs font-semibold text-slate-900 truncate">{inq.name}</p>
                            <span className="text-[10px] text-slate-400 flex items-center gap-1">
                              <Clock size={10} />
                              {new Date(inq.createdAt).toLocaleDateString([], { month: 'short', day: 'numeric' })}
                            </span>
                          </div>
                          <p className="text-xs text-slate-600 truncate mb-1">
                            Requested: <span className="font-medium text-slate-800">{inq.service}</span>
                          </p>
                          <span className={`inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            inq.status === 'New' ? 'bg-amber-100 text-amber-800' :
                            inq.status === 'Contacted' ? 'bg-blue-100 text-blue-800' :
                            'bg-slate-100 text-slate-600'
                          }`}>
                            {inq.status}
                          </span>
                        </div>
                      </div>
                    ))}

                    {inquiries.length === 0 && (
                      <div className="p-8 text-center text-slate-400 text-xs">
                        No notifications or inquiries found.
                      </div>
                    )}
                  </div>

                  <div className="p-3 bg-slate-50 border-t border-slate-100 text-center">
                    <Link 
                      to="/admin/inquiries" 
                      onClick={() => setNotificationsOpen(false)}
                      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 flex items-center justify-center gap-1"
                    >
                      View All Inquiries <ExternalLink size={12} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-9 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-sm shadow-xs">
                A
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-semibold text-slate-800 leading-tight">Admin User</p>
                <p className="text-[11px] text-slate-500 leading-tight">Administrator</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Viewport Container */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
