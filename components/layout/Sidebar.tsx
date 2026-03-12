"use client";

import { ChevronDown, Hash, LifeBuoy, User, UserCircle, Users, X } from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }:  SidebarProps ) {
  return (
    <>
      {/* MOBILE OVERLAY — dark background behind drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen w-[230.2px] border-r bg-gray-50 flex flex-col overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0 lg:flex lg:w-[230.2px] lg:z-auto lg:transition-none
        `}
      >

        {/* HEADER */}
        <div className="py-[13.55px] px-[11.23px] font-[790] text-[12.63px] leading-[100%] flex items-center justify-between">
          Inbox
          {/* Close button — only on mobile/tablet */}
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-black p-1 rounded"
          >
            <X size={16} />
          </button>
        </div>

        {/* NAV */}
        <nav className="px-2 space-y-1 text-[10.73px] text-[#222222] font-[457]">

          <div className="flex items-center justify-between px-3 py-2 border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <User size={14} />
              <span>My Inbox</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 py-2 border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <Users size={14} />
              <span>All</span>
            </div>
            <span className="text-[8.42px]">28</span>
          </div>

          <div className="flex items-center justify-between px-3 py-2  border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <LifeBuoy size={14} />
              <span>Unassigned</span>
            </div>
            <span className="text-[8.42px]">5</span>
          </div>

        </nav>

        {/* TEAMS */}
        <div className="px-4 mt-5 text-[9.82px] font-medium flex items-center justify-between">
          Teams
          <ChevronDown size={14} />
        </div>

        <div className="px-2 mt-2 space-y-1">

          <div className="flex justify-between px-3 py-2  border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <Users size={14} />
              <span className="text-[9.82px]">Sales</span>
            </div>
            <span className="text-[8.42px]">7</span>
          </div>

          <div className="flex justify-between px-3 py-2  border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <Users size={14} />
              <span className="text-[9.82px]">Customer Support</span>
            </div>
            <span className="text-[8.42px]">16</span>
          </div>

        </div>

        {/* USERS */}
        <div className="px-4 mt-5 text-[9.82px] font-[556] flex items-center justify-between">
          Users
          <ChevronDown size={14} />
        </div>

        <div className="px-2 mt-2 space-y-1">

          <div className="flex justify-between px-3 py-2  border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <UserCircle size={14} />
              <span className="text-[9.82px]">Sarah Williams</span>
            </div>
            <span className="text-[8.42px]">2</span>
          </div>

          <div className="flex justify-between px-3 py-2  border-[0.7px]   rounded-[5.61px] border-transparent hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <div className="flex items-center gap-2">
              <UserCircle size={14} />
              <span className="text-[9.82px]">Michael Johnson</span>
            </div>
            <span className="text-[8.42px]">11</span>
          </div>

        </div>

        {/* CHANNELS */}
        <div className="px-4 mt-5 text-[9.82px] font-[556] flex items-center justify-between">
          Channels
          <ChevronDown size={14} />
        </div>

        <div className="px-3 mt-2 space-y-1">

          <div className="flex items-center gap-2 py-2 px-2 text-[9.82px] border-[0.7px] border-transparent rounded-[5.61px] hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">
            <Hash size={14} />
            Fit4Life
          </div>

        </div>

      </aside>
    </>
  );
}
