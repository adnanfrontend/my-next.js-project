import { ChevronDown, PanelRight, Plus, Tag, Users } from "lucide-react";

export default function DetailsPanel() {
  return (
    <aside className="hidden xl:flex w-[340px] min-w-[340px] bg-white flex-col border-l border-[#E5E7EB] shrink-0">

      {/* HEADER */}
      <div className="px-[24px] py-[21px] border-b border-[#E5E7EB] flex items-center justify-between">

        <h3 className="font-[656] text-[12.63px] leading-[100%] tracking-[0%] text-[#000000]">
          Details
        </h3>

        <PanelRight size={18} className="text-gray-600" />

      </div>

      <div className="overflow-y-auto text-[13px]">

        {/* CHAT DATA */}
        <div className="px-[24px] py-[18px] border-b border-[#E5E7EB] space-y-[14px]">

          <div className="flex items-center justify-between">

            <h4 className="font-[556] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000]">
              Chat Data
            </h4>

            <ChevronDown size={16} className="text-gray-500" />

          </div>

          <div className="flex justify-between items-center">

            <span className="font-[457] text-[9.82px] leading-[100%] tracking-[0%] text-[#6B7280]">Assignee</span>

            <div className="flex items-center gap-[8px] mr-[15%]">

              <Users size={16} className="text-gray-600" />

              <span className="text-[#000000] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">James West</span>

            </div>

          </div>

          <div className="flex justify-between items-center">

            <span className="text-[#6B7280] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">Team</span>

            <div className="flex items-center gap-[8px] mr-[17%]">

              <Users size={16} className="text-gray-600" />

              <span className="text-[#000000] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">Sales Team</span>

            </div>

          </div>

        </div>

        {/* CONTACT DATA */}
        <div className="px-[24px] py-[18px] border-b border-[#E5E7EB] space-y-[14px]">

          <div className="flex items-center justify-between">

            <h4 className="font-[556] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000]">
              Contact Data
            </h4>

            <ChevronDown size={16} className="text-gray-500" />

          </div>

          <div className="flex justify-between">
            <span className="text-[#6B7280] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">First Name</span>
            <span className="text-[#111827] font-[556] text-[9.82px] leading-[100%] tracking-[0%] mr-[28%]">Olivia</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6B7280] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">Last Name</span>
            <span className="text-[#111827] font-[556] text-[9.82px] leading-[100%] tracking-[0%] mr-[22%]">Mckinsey</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6B7280] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">Phone number</span>
            <span className="text-[#111827] font-[556] text-[9.82px] leading-[100%] tracking-[0%] mr-[10%]">+1 (312) 555-0134</span>
          </div>

          <div className="flex justify-between">
            <span className="text-[#6B7280] font-[457] text-[9.82px] leading-[100%] tracking-[0%]">Email</span>
            <span className="text-[#111827] font-[556] text-[9.82px] leading-[100%] tracking-[0%] mr-[-5%]">
              olivia.Mckinsey@gmail.com
            </span>
          </div>

          <button className="text-[#111827] font-[656] text-[9.82px] leading-[100%] tracking-[0%]">
            See all
          </button>

        </div>

        {/* CONTACT LABELS */}
        <div className="px-[24px] py-[18px] border-b border-[#E5E7EB] space-y-[12px]">

          <div className="flex items-center justify-between">

            <h4 className="text-[#111827] font-[556] text-[9.82px] leading-[100%] tracking-[0%]">
              Contact Labels
            </h4>

            <ChevronDown size={16} className="text-gray-500" />

          </div>

          <div className="flex gap-[8px] flex-wrap">

            <span className="flex items-center gap-[6px] text-[#007AEC] font-[656] text-[8.82px] px-[10px] py-[4px] rounded-full border border-[#3B82F6]">
              <Tag size={12} />
              Closed Won
            </span>

            <span className="flex items-center gap-[6px] text-[#007AEC] font-[656] text-[8.82px] px-[10px] py-[4px] rounded-full border border-[#3B82F6]">
              <Tag size={12} />
              Chicago
            </span>

            <button className="w-[24px] h-[24px] flex items-center justify-center rounded-full border border-[#3B82F6] text-[#2563EB]">
              <Plus size={14} />
            </button>

          </div>

        </div>

        {/* NOTES */}
        <div className="px-[24px] py-[18px] border-b border-[#E5E7EB] space-y-[10px]">

          <div className="flex items-center justify-between">

            <h4 className="font-[600] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000]">
              Notes
            </h4>

            <ChevronDown size={16} className="text-gray-500" />

          </div>

          <div className="bg-[#F6E7B5] px-[12px] py-[12px] rounded-[6px] font-[500] text-[9.82px] leading-[100%] tracking-[0%] text-[#00000066]">
            Add a note
          </div>

          <div className="bg-[#F6E7B5] px-[12px] py-[12px] rounded-[6px] font-[500] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000]">
            Strong potential for future upgrades
          </div>

        </div>

        {/* OTHER CHATS */}
        <div className="px-[24px] py-[18px] space-y-[12px]">

          <div className="flex items-center justify-between">

            <h4 className="font-[600] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000]">
              Other Chats
            </h4>

            <ChevronDown size={16} className="text-gray-500" />

          </div>

          <div className="flex justify-between items-center">

            <div className="flex items-center gap-[10px]">

              <div className="w-[26px] h-[26px] rounded-full bg-pink-500 flex items-center justify-center text-white text-[12px] shrink-0">
                F
              </div>

              <div>

                <p className="pb-[2px] text-[9.82px] leading-[100%] tracking-[0%] text-[#000000] font-[400]">
                  Fit4Life
                </p>

                <p className="text-[9.82px] leading-[100%] tracking-[0%] font-[500] text-[#00000080]">
                  On my way!
                </p>

              </div>

            </div>

            <span className="text-[11px] text-[#9CA3AF]">
              08/08/25
            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}
