import { useState, useEffect } from "react";
import { Lock, RefreshCw, LogIn, Layout, Users, MessageSquare } from "lucide-react";
import { decryptData } from "./utils/encryption";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("responses");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setToken(data.token);
      localStorage.setItem("adminToken", data.token);
    } catch (err: any) {
      setLoginError(err.message);
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("adminToken");
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-navy-900 border border-navy-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary-900/50 flex items-center justify-center text-primary-400 border border-primary-500/20">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white text-center mb-8">Admin Access</h2>
          {loginError && <p className="text-red-400 text-sm mb-4 text-center bg-red-400/10 py-2 rounded">{loginError}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-navy-300 text-sm mb-2">Email</label>
              <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-navy-950 border border-navy-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" />
            </div>
            <div>
              <label className="block text-navy-300 text-sm mb-2">Password</label>
              <input type="password" required value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-navy-950 border border-navy-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500" />
            </div>
            <button type="submit" className="w-full bg-primary-600 hover:bg-primary-500 text-navy-950 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-6">
              <LogIn size={20} /> Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-950 flex">
      {/* Sidebar */}
      <div className="w-64 bg-navy-900 border-r border-navy-800 flex flex-col">
        <div className="p-6 border-b border-navy-800">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Layout size={24} className="text-primary-500" /> CMS
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button onClick={() => setActiveTab('responses')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'responses' ? 'bg-primary-900/20 text-primary-400 border border-primary-500/20' : 'text-navy-300 hover:bg-navy-800'}`}>
            <MessageSquare size={20} /> Secure Inbox
          </button>
          <button onClick={() => setActiveTab('content')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'content' ? 'bg-primary-900/20 text-primary-400 border border-primary-500/20' : 'text-navy-300 hover:bg-navy-800'}`}>
            <Layout size={20} /> Site Content
          </button>
          <button onClick={() => setActiveTab('clients')} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${activeTab === 'clients' ? 'bg-primary-900/20 text-primary-400 border border-primary-500/20' : 'text-navy-300 hover:bg-navy-800'}`}>
            <Users size={20} /> Clients
          </button>
        </nav>
        <div className="p-4 border-t border-navy-800">
          <button onClick={handleLogout} className="w-full py-2 text-navy-400 hover:text-white transition-colors">Logout</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'responses' && <ResponsesTab />}
        {activeTab === 'content' && <ContentTab token={token} />}
        {activeTab === 'clients' && <ClientsTab token={token} />}
      </div>
    </div>
  );
}

function ResponsesTab() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact");
      const data = await response.json();
      const decryptedData = await Promise.all(data.map(async (item: any) => {
        try {
          const decryptedJson = await decryptData(item.encryptedData, item.iv);
          return { ...JSON.parse(decryptedJson), id: item.id, createdAt: item.createdAt };
        } catch (e) {
          return { name: "Decryption Failed", id: item.id, createdAt: item.createdAt };
        }
      }));
      setSubmissions(decryptedData);
    } catch (err) {}
    setLoading(false);
  };

  useEffect(() => { fetchSubmissions(); }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">Secure Inbox</h1>
        <button onClick={fetchSubmissions} className="p-2 bg-navy-800 text-navy-300 rounded-lg hover:text-white"><RefreshCw size={20}/></button>
      </div>
      <div className="bg-navy-900 border border-navy-800 rounded-xl overflow-hidden">
        <table className="w-full text-left text-navy-300">
          <thead className="bg-navy-800/50">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Name</th>
              <th className="p-4">Contact</th>
              <th className="p-4">Service</th>
              <th className="p-4">Message</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-800">
            {submissions.map(sub => (
              <tr key={sub.id}>
                <td className="p-4">{new Date(sub.createdAt).toLocaleDateString()}</td>
                <td className="p-4 text-white font-medium">{sub.name}</td>
                <td className="p-4">{sub.email}</td>
                <td className="p-4">{sub.service}</td>
                <td className="p-4 max-w-xs truncate">{sub.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ContentTab({ token }: { token: string }) {
  const [content, setContent] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/content")
      .then(r => r.json())
      .then(d => { setContent(d); setLoading(false); });
  }, []);

  const handleSave = async (section: string, key: string, value: string) => {
    await fetch("http://localhost:5000/api/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ updates: [{ section, key, value }] })
    });
    alert("Saved!");
  };

  if (loading) return <div className="text-white">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Site Content</h1>
      
      {Object.keys(content).map(section => (
        <div key={section} className="mb-8 bg-navy-900 border border-navy-800 p-6 rounded-xl">
          <h2 className="text-xl font-bold text-primary-400 capitalize mb-4">{section} Section</h2>
          {Object.keys(content[section]).map(key => (
            <div key={key} className="mb-4">
              <label className="block text-navy-300 mb-2 capitalize">{key}</label>
              <div className="flex gap-4">
                <input 
                  value={content[section][key]} 
                  onChange={e => setContent({ ...content, [section]: { ...content[section], [key]: e.target.value } })}
                  className="flex-1 bg-navy-950 border border-navy-800 rounded-lg px-4 py-2 text-white" 
                />
                <button 
                  onClick={() => handleSave(section, key, content[section][key])}
                  className="px-4 py-2 bg-primary-600 text-navy-950 font-bold rounded-lg"
                >Save</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ClientsTab({ token }: { token: string }) {
  const [clients, setClients] = useState<any[]>([]);
  const [name, setName] = useState("");

  const fetchClients = () => {
    fetch("http://localhost:5000/api/clients")
      .then(r => r.json())
      .then(setClients);
  };

  useEffect(() => { fetchClients(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ name, logoUrl: "" })
    });
    setName("");
    fetchClients();
  };

  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:5000/api/clients/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });
    fetchClients();
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Manage Clients</h1>
      
      <div className="bg-navy-900 border border-navy-800 p-6 rounded-xl mb-8">
        <h2 className="text-lg text-white mb-4">Add New Client</h2>
        <form onSubmit={handleAdd} className="flex gap-4">
          <input 
            value={name} 
            onChange={e => setName(e.target.value)}
            placeholder="Client Name"
            required
            className="flex-1 bg-navy-950 border border-navy-800 rounded-lg px-4 py-2 text-white" 
          />
          <button type="submit" className="px-6 py-2 bg-primary-600 text-navy-950 font-bold rounded-lg">Add</button>
        </form>
      </div>

      <div className="bg-navy-900 border border-navy-800 rounded-xl overflow-hidden">
        {clients.map(client => (
          <div key={client.id} className="p-4 border-b border-navy-800 flex justify-between items-center text-navy-300">
            <span>{client.name}</span>
            <button onClick={() => handleDelete(client.id)} className="text-red-400 hover:text-red-300">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
