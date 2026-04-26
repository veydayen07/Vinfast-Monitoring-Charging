import { EllipsisVertical, ListFilter, RotateCw, Search } from "lucide-react";
import React from "react";
// import { Icon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-slate-950 docked full-width top-0 border-b border-white/10 flat no shadows flex justify-between items-center w-full px-6 h-16 z-50 sticky font-inter antialiased tracking-tight">
      <div className="flex items-center gap-6">
        <span className="text-lg font-bold text-slate-100 uppercase tracking-widest">
          Monitoring EV Charging Station
        </span>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          {/* <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
            search
          </span> */}
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            className="bg-slate-900 border border-white/10 rounded-lg pl-10 pr-4 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 w-64 text-slate-100"
            placeholder="Search nodes..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-1">
          <button
            className="p-2 text-blue-500 hover:bg-slate-900 rounded-lg transition-transform duration-75 active:scale-95"
            title="Filter List"
          >
            {/* <span className="material-symbols-outlined">filter_list</span> */}
            <ListFilter size={20} />
          </button>
          <button
            className="p-2 text-blue-500 hover:bg-slate-900 rounded-lg transition-transform duration-75 active:scale-95"
            title="Refresh"
          >
            <RotateCw size={20} />
          </button>
          <button
            className="p-2 text-blue-500 hover:bg-slate-900 rounded-lg transition-transform duration-75 active:scale-95"
            title="More Options"
          >
            <EllipsisVertical size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
