import { CheckCheck, CornerUpLeft, ImageIcon, Menu, MessageSquare, Mic, PlaySquare, Smile, Zap } from "lucide-react";

export default function ChatWindow() {
  return (
    <div className="flex flex-col flex-1 h-full min-w-0">

      {/* HEADER */}
      <div className="flex items-center justify-between px-4 md:px-6 py-3 border-b border-[#D8DEE4] bg-white">

        <div className="flex items-center">

          {/* Mobile Menu - shows on small screens */}
          <button className="md:hidden mr-2 p-1 rounded hover:bg-gray-100 transition">
            <Menu size={18} />
          </button>

          <h2 className="font-semibold text-[13px] md:text-[14px] text-black">
            Olivia Mckinsey
          </h2>

        </div>

        <div className="flex gap-2">

          <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-100 flex items-center justify-center">
            ⋮
          </button>

          <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-100 flex items-center justify-center">
            ☾
          </button>

          <button className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gray-100 flex items-center justify-center">
            🗔
          </button>

        </div>

      </div>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto bg-white px-3 md:px-6 py-4 space-y-6">

        {/* Date */}
        <div className="flex justify-center">
          <span className="text-xs bg-gray-200 py-2 px-3 rounded-md">
            28 August 2025
          </span>
        </div>

        {/* USER MESSAGE */}
        <div className="flex items-start gap-2 max-w-[85%] md:max-w-[330px]">

          <div className="bg-[#EFF2F2] text-[12px] md:text-[13px] px-4 py-3 rounded-lg">
            Hi, I recently joined Fit4Life and I'm trying to access my workout plan,
            but I can't login. Can you help?
          </div>

          <span className="text-[10px] text-black mt-1 shrink-0">
            23:08
          </span>

        </div>

        {/* AGENT MESSAGE */}
        <div className="flex justify-end">

          <div className="flex items-start gap-2 max-w-[85%] md:max-w-[330px]">

            <span className="text-[10px] text-black mt-1 shrink-0">
              <CheckCheck size={12} className="text-blue-500" /> 23:08
            </span>

            <div className="bg-[#EDE3FD] text-[12px] md:text-[13px] px-4 py-3 rounded-lg">
              Hello Olivia 👋 I'm Michael, your AI customer support assistant.
              Let's fix this quickly. Could you confirm the email address?
            </div>

          </div>

        </div>

        {/* USER MESSAGE */}
        <div className="flex items-start gap-2 max-w-[85%] md:max-w-[330px]">

          <div className="bg-[#EFF2F2] text-[12px] md:text-[13px] px-4 py-3 rounded-lg">
            Yes, it's olivia.Mckinsey@gmail.com
          </div>

          <span className="text-[10px] text-black mt-1 shrink-0">
            23:16
          </span>

        </div>

        {/* USER MESSAGE */}
        <div className="flex items-start gap-2 max-w-[85%] md:max-w-[330px]">

          <div className="bg-[#EFF2F2] text-[12px] md:text-[13px] px-4 py-3 rounded-lg">
            Hi, I recently joined Fit4Life and I'm trying to access my workout plan,
            but I can't login. Can you help?
          </div>

          <span className="text-[10px] text-black mt-1 shrink-0">
            23:08
          </span>

        </div>

        {/* AGENT MESSAGE */}
        <div className="flex justify-end">

          <div className="flex items-start gap-2 max-w-[85%] md:max-w-[330px]">

            <span className="text-[10px] text-black mt-1 shrink-0">
              <CheckCheck size={12} className="text-blue-500" /> 23:08
            </span>

            <div className="bg-[#EDE3FD] text-[12px] md:text-[13px] px-4 py-3 rounded-lg">
              Hello Olivia 👋 I'm Michael, your AI customer support assistant.
              Let's fix this quickly. Could you confirm the email address?
            </div>

          </div>

        </div>

      </div>

      {/* MESSAGE INPUT */}
      <div className="w-full bg-white border-t border-[#D8DEE4] p-3 md:p-4">

        <div className="w-full md:max-w-[520px] mx-auto border border-[#D8DEE4] rounded-xl px-4 py-3">

          {/* INPUT */}
          <textarea
            placeholder="Type something..."
            className="w-full bg-transparent outline-none resize-none text-sm placeholder:text-gray-400 mb-3"
          />

          {/* TOOLBAR */}
          <div className="flex items-center justify-between flex-wrap gap-2">

            {/* LEFT ICONS */}
            <div className="flex items-center gap-3 text-gray-700">

              <button className="hover:text-black">
                <ImageIcon size={18} />
              </button>

              <button className="hover:text-black">
                <PlaySquare size={18} />
              </button>

              <button className="hover:text-black">
                <MessageSquare size={18} />
              </button>

              <button className="hover:text-black">
                <Smile size={18} />
              </button>

              <button className="hover:text-black">
                <CornerUpLeft size={18} />
              </button>

            </div>

            {/* RIGHT ICONS */}
            <div className="flex items-center gap-4 text-gray-700">

              <button className="hover:text-black">
                <Zap size={18} />
              </button>

              <button className="hover:text-black">
                <Mic size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
