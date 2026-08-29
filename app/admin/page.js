"use client";

import { useState } from "react";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [activeTab, setActiveTab] = useState("users");

  const [eduType, setEduType] = useState("school");
  const [selectedClass, setSelectedClass] = useState(null);

  const [curriculums, setCurriculums] = useState([
    { id: 1, title: "Telugu Syllabus PDF" }
  ]);

  const [linksList, setLinksList] = useState([
    { id: 1, name: "Physics Lab Kit", url: "https://amazon.in/dp/example" }
  ]);
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUser === "Admin" && adminPass === "Admin@123") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid Admin Credentials!");
    }
  };

  const addCurriculum = () => {
    setCurriculums([...curriculums, { id: Date.now(), title: "New Subject Curriculum" }]);
  };

  const removeCurriculum = (id) => {
    setCurriculums(curriculums.filter((c) => c.id !== id));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4">
        <form onSubmit={handleAdminLogin} className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl flex flex-col gap-4">
          <div className="text-center mb-2">
            <h1 className="text-2xl font-black text-slate-800">LifeForge Admin</h1>
            <p className="text-xs text-slate-500">Access Management Panel</p>
          </div>
          <input
            type="text"
            placeholder="Username (Admin)"
            value={adminUser}
            onChange={(e) => setAdminUser(e.target.value)}
            className="border p-3 rounded-xl text-sm outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password (Admin@123)"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
            className="border p-3 rounded-xl text-sm outline-none"
            required
          />
          <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-xl shadow-lg">
            Login to Admin
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <header className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-6">
        <h1 className="text-xl font-extrabold text-slate-900">LifeForge Control Center</h1>
        <button onClick={() => setIsLoggedIn(false)} className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-xl">
          Logout
        </button>
      </header>

      {/* TABS */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <button
          onClick={() => setActiveTab("users")}
          className={`p-3 rounded-2xl font-bold text-xs border ${
            activeTab === "users" ? "bg-blue-600 text-white" : "bg-white text-slate-700"
          }`}
        >
          👥 Users
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`p-3 rounded-2xl font-bold text-xs border ${
            activeTab === "analytics" ? "bg-emerald-600 text-white" : "bg-white text-slate-700"
          }`}
        >
          📈 Analytics
        </button>
        <button
          onClick={() => setActiveTab("links")}
          className={`p-3 rounded-2xl font-bold text-xs border ${
            activeTab === "links" ? "bg-purple-600 text-white" : "bg-white text-slate-700"
          }`}
        >
          🔗 Links
        </button>
      </div>

      {activeTab === "users" && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={() => setEduType("school")}
              className={`py-2 rounded-xl text-xs font-bold ${eduType === "school" ? "bg-amber-500 text-white" : "bg-slate-100"}`}
            >
              School (1st - 10th)
            </button>
            <button
              onClick={() => setEduType("college")}
              className={`py-2 rounded-xl text-xs font-bold ${eduType === "college" ? "bg-indigo-600 text-white" : "bg-slate-100"}`}
            >
              College (Inter, Diploma, BTech)
            </button>
          </div>

          {eduType === "school" && (
            <div>
              <p className="text-xs font-bold text-slate-500 mb-2">Select Class:</p>
              <div className="flex gap-2 overflow-x-auto pb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedClass(c)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border whitespace-nowrap ${
                      selectedClass === c ? "bg-amber-500 text-white" : "bg-slate-50"
                    }`}
                  >
                    Class {c}
                  </button>
                ))}
              </div>

              {selectedClass >= 5 && (
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-extrabold text-xs text-slate-700">Class {selectedClass} Curriculums</h4>
                    <button onClick={addCurriculum} className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-xl font-bold">
                      + Add Curriculum Block
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {curriculums.map((curr) => (
                      <div key={curr.id} className="border p-3 rounded-2xl bg-slate-50 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-slate-800">{curr.title}</p>
                          <input type="file" className="text-[10px] mt-1" />
                        </div>
                        <button onClick={() => removeCurriculum(curr.id)} className="text-rose-600 font-bold text-xs p-1">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === "analytics" && (
        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <h2 className="font-extrabold text-xs mb-4">User Activity Growth Chart</h2>
          <div className="h-48 flex items-end justify-between gap-2 border-b border-l p-4 bg-slate-50 rounded-2xl">
            {[40, 65, 80, 55, 90, 100].map((val, i) => (
              <div key={i} className="flex-1 bg-emerald-500 rounded-t-lg" style={{ height: `${val}%` }}></div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "links" && (
        <div className="bg-white rounded-3xl p-6 border shadow-sm">
          <h2 className="font-extrabold text-xs mb-4">Manage Links</h2>
          <div className="flex flex-col gap-2 mb-4 border p-4 rounded-2xl bg-slate-50">
            <input
              type="text"
              placeholder="Link Name"
              value={newLinkName}
              onChange={(e) => setNewLinkName(e.target.value)}
              className="p-2 border rounded-xl text-xs outline-none"
            />
            <input
              type="text"
              placeholder="Target URL"
              value={newLinkUrl}
              onChange={(e) => setNewLinkUrl(e.target.value)}
              className="p-2 border rounded-xl text-xs outline-none"
            />
            <button
              onClick={() => {
                if (newLinkName && newLinkUrl) {
                  setLinksList([...linksList, { id: Date.now(), name: newLinkName, url: newLinkUrl }]);
                  setNewLinkName("");
                  setNewLinkUrl("");
                }
              }}
              className="bg-purple-600 text-white font-bold py-2 rounded-xl text-xs mt-1"
            >
              Add Link
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {linksList.map((link) => (
              <div key={link.id} className="p-3 border rounded-xl flex justify-between items-center text-xs">
                <div>
                  <p className="font-bold">{link.name}</p>
                  <p className="text-slate-400">{link.url}</p>
                </div>
                <button onClick={() => setLinksList(linksList.filter((l) => l.id !== link.id))} className="text-rose-600 font-bold">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
