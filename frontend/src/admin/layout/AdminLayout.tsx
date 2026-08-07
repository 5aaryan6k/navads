import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, FileText, Settings, Users, 
  MessageSquare, Briefcase, Menu, X, LogOut, FileImage, 
  Search, Bell
} from "lucide-react";

export function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("admin_auth") !== "true") {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    localStorage.removeItem("admin_auth");
    navigate("/");
  };

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { 
      name: "Content", 
      icon: FileText,
      children: [
        { name: "Homepage", href: "/admin/content/homepage" },
        { name: "About Us", href: "/admin/content/about" },
        { name: "CEO Message", href: "/admin/content/ceo" },
      ]
    },
    { name: "Services", href: "/admin/services", icon: Briefcase },
    { name: "Media Library", href: "/admin/media", icon: FileImage },
    { name: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
    { name: "Users & Roles", href: "/admin/users", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 fixed inset-y-0 z-50 lg:relative`}>
        <div className="h-16 flex items-center justify-between px-4 bg-slate-950">
          {sidebarOpen ? (
            <span className="text-white font-bold text-lg tracking-wide">NAVI ADMIN</span>
          ) : (
            <span className="text-white font-bold text-lg mx-auto">N</span>
          )}
          <button className="lg:hidden text-slate-400 hover:text-white" onClick={() => setSidebarOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="mb-2">
                    {sidebarOpen && <div className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 mt-4">{item.name}</div>}
                    {item.children.map(child => {
                      const isActive = location.pathname === child.href;
                      return (
                        <Link
                          key={child.name}
                          to={child.href}
                          className={`${isActive ? "bg-emerald-600 text-white" : "hover:bg-slate-800 hover:text-white"} group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1`}
                        >
                          {sidebarOpen ? child.name : child.name.substring(0, 1)}
                        </Link>
                      )
                    })}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`${location.pathname === item.href ? "bg-emerald-600 text-white" : "hover:bg-slate-800 hover:text-white"} group flex items-center px-3 py-2 text-sm font-medium rounded-md mb-1`}
                  >
                    <item.icon className={`flex-shrink-0 h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
                    {sidebarOpen && item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
        <div className="p-4 bg-slate-950">
          <button onClick={handleLogout} className="flex w-full items-center text-sm font-medium text-slate-400 hover:text-white">
            <LogOut className={`flex-shrink-0 h-5 w-5 ${sidebarOpen ? "mr-3" : "mx-auto"}`} />
            {sidebarOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 z-10">
          <div className="flex items-center">
            <button className="text-slate-500 hover:text-slate-700 focus:outline-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu size={24} />
            </button>
            <div className="ml-4 flex items-center bg-slate-100 rounded-lg px-3 py-1.5 hidden sm:flex">
              <Search size={16} className="text-slate-400 mr-2" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-48 text-slate-700" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-sm">
                A
              </div>
              <span className="text-sm font-medium text-slate-700 hidden sm:block">Admin</span>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
