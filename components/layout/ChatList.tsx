"use client";

import { Search, SlidersHorizontal, Pencil, Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function ChatList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet Sidebar Drawer */}
      <div className="lg:hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>

      <section className="w-full md:w-70 md:min-w-70 border-r border-[#D8DEE4] flex flex-col bg-white h-full shrink-0">

        {/* HEADER */}
        <div className="flex items-center justify-between py-[16px] px-[22.33px] border-b border-[#D8DEE4]">

          <div className="flex items-center gap-2">

            {/* Mobile/Tablet: Hamburger button — clearly visible, separate from avatar */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden flex items-center justify-center w-7 h-7 rounded-md text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
              title="Open Inbox"
              aria-label="Open sidebar menu"
            >
              <Menu size={18} />
            </button>

            {/* Michael Johnson avatar — always visible, independent icon */}
            <div className="w-7 h-7 rounded-full bg-[#99BBF6] flex items-center justify-center text-[#000000] text-[9.82px] font-[556] shrink-0">
              M
            </div>

            <h2 className="font-semibold text-[12.63px] text-black">
              Michael Johnson
            </h2>

          </div>

          <button className="text-gray-500 hover:text-black">
            <Pencil size={14} />
          </button>

        </div>

        {/* SEARCH */}
        <div className="px-3 py-3">
          <div className="flex items-center justify-between gap-2">

            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-md w-full">
              <Search size={14} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search Chat"
                className="w-full bg-transparent text-[10px] outline-none"
              />
            </div>

            <button className="text-gray-500">
              <SlidersHorizontal size={14} />
            </button>

          </div>
        </div>

        {/* FILTER */}
        <div className="flex justify-between px-4 py-2 text-[10px]">
          <span className="font-medium text-black flex items-center gap-1">
            Open
            <ChevronDown size={14} />
          </span>
          <span className="font-medium text-black flex items-center gap-1">
            Newest <ChevronDown size={14} />
          </span>
        </div>

        {/* CHAT LIST */}
        <div className="flex-1 overflow-y-auto mx-[8.42px]">

          <ChatItem
            name="Olivia Mckinsey"
            message="Oh my god 😍 I'll try it ASAP, thank..."
            time="23:23"
            color="bg-[#A592F5]"
            letter="O"
          />

          <ChatItem
            name="Sara Williams"
            message="Good Evening, Emily! Hope you are..."
            time="23:16"
            color="bg-[#FBD966]"
            letter="E"
          />

          <ChatItem
            name="Frank Thompson"
            message="Thank you for signing up Frank! If t..."
            time="22:28"
            color="bg-[#99BBF6]"
            letter="F"
          />

          <ChatItem
            name="Grace Lee"
            message="I am sending you the report right a..."
            time="20:43"
            color="bg-[#EF9D7E]"
            letter="G"
          />

          <ChatItem
            name="Henry Adams"
            message="Thank you for filling out our survey!"
            time="17:37"
            color="bg-[#FBD966]"
            letter="H"
          />

        </div>

      </section>
    </>
  );
}

function ChatItem({ name, message, time, color, letter }: {
  name: string;
  message: string;
  time: string;
  color: string;
  letter: string;
}) {
  return (
    <div className="flex items-start gap-3 px-2 py-3 shadow-[0px_1.4px_8.42px_0px_#f3f3f3] border-[0.7px] border-transparent rounded-[5.61px] hover:border-[#D8DEE4] hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]">

      <div
        className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-[#000000] text-[9.82px] font-[556] shrink-0`}
      >
        {letter}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between pb-1 text-[10px] font-medium text-black">
          <span className="truncate">{name}</span>
          <span className="text-[8px] text-black/70 shrink-0 ml-1">
            {time}
          </span>
        </div>
        <p className="text-[10px] text-black/50 truncate">
          {message}
        </p>
      </div>

    </div>
  );
}
