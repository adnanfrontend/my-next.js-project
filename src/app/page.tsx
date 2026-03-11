"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   TYPES
───────────────────────────────────────── */
interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

interface ChatContact {
  id: number;
  name: string;
  preview: string;
  time: string;
  avatarColor: string;
  initial: string;
}

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CONTACTS: ChatContact[] = [
  { id: 1, name: "Olivia Mckinsey", preview: "Oh my god 😊 I'll try it ASAP, thank...", time: "23:23", avatarColor: "#f97316", initial: "O" },
  { id: 2, name: "Sara Williams",   preview: "Good Evening, Emily! Hope you are...",   time: "23:16", avatarColor: "#10b981", initial: "S" },
  { id: 3, name: "Frank Thompson",  preview: "Thank you for signing up Frank! If t...",  time: "22:28", avatarColor: "#3b82f6", initial: "F" },
];

const MESSAGES: ChatMessage[] = [
  { id: 1, sender: "user", text: "Hi, I recently joined Fit4Life and I'm trying to access my workout plan, but I can't login. Can you help?", time: "23:06" },
  { id: 2, sender: "ai",   text: "Hello Olivia 👋 I'm Michael, your AI customer support assistant. Let's fix this quickly. Could you confirm the email address?", time: "23:08" },
  { id: 3, sender: "user", text: "Yes, it's olivia.Mckinsey@gmail.com", time: "23:16" },
  { id: 4, sender: "ai",   text: "Thanks! Looks like the reset wasn't sent — I'll push a new link to you right now.", time: "23:16" },
];

/* ─────────────────────────────────────────
   HEX ICONS CONFIG
───────────────────────────────────────── */
const HEX_ICONS: Array<{
  Icon: React.FC<{ size?: number }>;
  size: number;
  style: React.CSSProperties;
  delay: string;
}> = [
  { Icon: SparkleIcon,  size: 70, style: { top: "14%", left: "18%"  }, delay: "0s"   },
  { Icon: InboxIcon,    size: 60, style: { top: "42%", left: "10%"  }, delay: "0.5s" },
  { Icon: ContactsIcon, size: 66, style: { top: "68%", left: "21%"  }, delay: "1s"   },
  { Icon: ContactsIcon, size: 66, style: { top: "10%", right: "8%"  }, delay: "1.5s" },
  { Icon: WorkflowIcon, size: 74, style: { top: "36%", right: "18%" }, delay: "0.8s" },
  { Icon: ChartIcon,    size: 62, style: { top: "68%", right: "8%"  }, delay: "0.3s" },
];

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function BOXpadDashboard() {
  const [extracting, setExtracting] = useState(true);
  const [dashboardVisible, setDashboardVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDashboardVisible(true), 500);
    const t2 = setTimeout(() => setExtracting(false), 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: "radial-gradient(ellipse 80% 60% at 60% 30%, #0d3a8a 0%, #091240 40%, #050c20 100%)" }}
    >
      {/* ── EXTRACTING SECTION ── */}
      <div
        className="relative flex flex-col items-center justify-center flex-1 overflow-hidden px-4 transition-all duration-700"
        style={{ minHeight: extracting ? 380 : 240, paddingTop: 32, paddingBottom: 16 }}
      >
        {/* Atmosphere glows */}
        <div className="pointer-events-none absolute rounded-full" style={{ width: 560, height: 560, background: "rgba(30,100,255,0.28)", filter: "blur(90px)", top: -120, right: "10%" }} />
        <div className="pointer-events-none absolute rounded-full" style={{ width: 320, height: 320, background: "rgba(0,200,255,0.12)", filter: "blur(90px)", top: 80, left: "25%" }} />
        <div className="pointer-events-none absolute rounded-full" style={{ width: 260, height: 260, background: "rgba(10,60,200,0.35)", filter: "blur(90px)", bottom: 220, right: "5%" }} />

        {/* Floating hex icons */}
        {HEX_ICONS.map(({ Icon, size, style, delay }, i) => (
          <HexIcon key={i} Icon={Icon} size={size} style={style} delay={delay} />
        ))}

        {/* Ring */}
        <AnimatedRing />

        {/* Text */}
        <h1
          className="text-white font-bold text-center mt-6 mb-2"
          style={{ fontSize: "clamp(22px,4vw,32px)", letterSpacing: "-0.3px" }}
        >
          {extracting ? "Extracting Information..." : "Ready!"}
        </h1>
        <p
          className="text-center max-w-md mx-auto leading-relaxed mb-4"
          style={{ color: "rgba(180,210,255,0.75)", fontSize: "clamp(12px,2vw,15px)" }}
        >
          {extracting
            ? "We are extracting information from the above honey combs to your system"
            : "Your dashboard is ready. All data has been loaded."}
        </p>
        {extracting && <LoadingDots />}
      </div>

      {/* ── DASHBOARD PANEL ── */}
      <div
        className="mx-auto w-full rounded-t-xl overflow-hidden transition-all duration-700"
        style={{
          maxWidth: 1260,
          background: "#fff",
          boxShadow: "0 -8px 48px rgba(0,0,0,0.45)",
          opacity: dashboardVisible ? 1 : 0,
          transform: dashboardVisible ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <NavBar />
        <div className="flex" style={{ height: 300, overflow: "hidden" }}>
          <InboxSidebar />
          <ChatList contacts={CONTACTS} />
          <ConversationPanel messages={MESSAGES} />
          <DetailsPanel />
        </div>
      </div>

      {/* Global keyframe styles */}
      <style>{`
        @keyframes drawArc {
          0%   { stroke-dashoffset: 420; opacity: 0.4; }
          50%  { stroke-dashoffset: 0;   opacity: 1;   }
          100% { stroke-dashoffset: -420; opacity: 0.4; }
        }
        @keyframes ringPulse {
          0%,100% { transform: scale(0.92); opacity: 0.6; }
          50%     { transform: scale(1.08); opacity: 1;   }
        }
        @keyframes hexFloat {
          0%,100% { transform: translateY(0);    }
          50%     { transform: translateY(-6px); }
        }
        @keyframes dotBounce {
          0%,80%,100% { transform: scale(0.6); opacity: 0.4; }
          40%          { transform: scale(1);   opacity: 1;   }
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0;  }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────
   ANIMATED RING
───────────────────────────────────────── */
function AnimatedRing() {
  return (
    <div className="relative flex-shrink-0" style={{ width: 220, height: 220 }}>
      <svg width="220" height="220" viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#00c6ff" />
            <stop offset="50%"  stopColor="#2563ff" />
            <stop offset="100%" stopColor="#00c6ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(20,80,220,0.18)" strokeWidth="3" />
        <circle cx="100" cy="100" r="88" fill="none" stroke="rgba(37,99,255,0.12)" strokeWidth="10" />
        <circle
          cx="100" cy="100" r="88"
          fill="none"
          stroke="url(#ringGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="420"
          transform="rotate(-90 100 100)"
          style={{ animation: "drawArc 2.2s cubic-bezier(.4,0,.2,1) infinite" }}
        />
        <circle cx="100" cy="100" r="72" fill="none" stroke="rgba(37,99,255,0.08)" strokeWidth="1.5" />
      </svg>
      <div
        className="absolute rounded-full"
        style={{
          inset: 30,
          background: "radial-gradient(circle, rgba(20,100,255,0.22) 0%, transparent 70%)",
          animation: "ringPulse 2.2s ease-in-out infinite",
        }}
      />
    </div>
  );
}

/* ─────────────────────────────────────────
   LOADING DOTS
───────────────────────────────────────── */
function LoadingDots() {
  return (
    <div className="flex items-center justify-center gap-1">
      {[0, 0.2, 0.4].map((delay, i) => (
        <span
          key={i}
          className="inline-block rounded-full"
          style={{
            width: 6,
            height: 6,
            background: "#4a90e2",
            animation: `dotBounce 1.2s ease-in-out ${delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   HEX ICON
───────────────────────────────────────── */
function HexIcon({
  Icon,
  size,
  style,
  delay,
}: {
  Icon: React.FC<{ size?: number }>;
  size: number;
  style: React.CSSProperties;
  delay: string;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{
        width: size,
        height: size,
        animation: `hexFloat 3s ease-in-out ${delay} infinite`,
        ...style,
      }}
    >
      <svg viewBox="0 0 100 115" fill="none" className="absolute w-full h-full">
        <polygon
          points="50,5 95,27.5 95,87.5 50,110 5,87.5 5,27.5"
          fill="rgba(15,40,110,0.7)"
          stroke="rgba(60,120,255,0.35)"
          strokeWidth="2"
        />
      </svg>
      <div className="relative z-10" style={{ color: "#7ab4ff" }}>
        <Icon size={Math.round(size * 0.35)} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   NAV BAR
───────────────────────────────────────── */
const NAV_ITEMS: Array<{ label: string; icon: React.FC<{ size?: number }>; active: boolean }> = [
  { label: "Inbox",        icon: InboxIcon,    active: true  },
  { label: "Contacts",     icon: ContactsIcon, active: false },
  { label: "AI Employees", icon: SparkleIcon,  active: false },
  { label: "Workflows",    icon: WorkflowIcon, active: false },
  { label: "Campaigns",    icon: CampaignIcon, active: false },
];

function NavBar() {
  return (
    <div className="flex items-center justify-between px-3 border-b border-gray-200">
      <div className="flex items-center">
        <div className="flex items-center gap-1 pr-5 mr-1 border-r border-gray-200">
          <span style={{ color: "#2563eb", fontWeight: 800, fontSize: 16, letterSpacing: "-0.5px" }}>
            BOX<span style={{ color: "#111827" }}>pad</span>
          </span>
        </div>
        {NAV_ITEMS.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium transition-colors"
            style={{
              color: active ? "#111827" : "#6b7280",
              borderBottom: active ? "2px solid #111827" : "2px solid transparent",
            }}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <button className="text-gray-400 hover:text-gray-600 p-1">
          <SettingsIcon size={18} />
        </button>
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ background: "#7c3aed" }}
          >
            M
          </div>
          <span className="text-sm font-medium text-gray-900">Michael Johnson</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   INBOX SIDEBAR
───────────────────────────────────────── */
function InboxSidebar() {
  return (
    <div
      className="hidden md:block flex-shrink-0 overflow-y-auto border-r border-gray-200"
      style={{ width: 180, background: "#fff" }}
    >
      <SidebarSection label="Inbox" />
      <SidebarItem label="My Inbox"      icon={<UserIcon size={14} />} />
      <SidebarItem label="All"           icon={<UsersIcon size={14} />} badge="28" />
      <SidebarItem label="Unassigned"    icon={<QuestionIcon size={14} />} badge="5" badgeBlue />
      <SidebarSection label="Teams" />
      <SidebarItem label="Sales"            dot="#22c55e" badge="7" />
      <SidebarItem label="Customer Support" dot="#f59e0b" badge="16" />
      <SidebarSection label="Users" />
      <SidebarItem label="▾ View all" />
    </div>
  );
}

function SidebarSection({ label }: { label: string }) {
  return (
    <div className="px-4 pt-3 pb-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wider">
      {label}
    </div>
  );
}

function SidebarItem({
  label,
  icon,
  badge,
  badgeBlue,
  dot,
}: {
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeBlue?: boolean;
  dot?: string;
}) {
  return (
    <div className="flex items-center justify-between mx-2 px-3 py-1.5 rounded-md cursor-pointer hover:bg-gray-50 text-sm text-gray-700">
      <div className="flex items-center gap-2">
        {dot && (
          <div className="w-3.5 h-3.5 rounded-full flex-shrink-0" style={{ background: dot }} />
        )}
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      {badge && (
        <span
          className="text-xs font-semibold px-1.5 py-0.5 rounded-full"
          style={{
            background: badgeBlue ? "#dbeafe" : "#f3f4f6",
            color:      badgeBlue ? "#1d4ed8" : "#374151",
          }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────
   CHAT LIST
───────────────────────────────────────── */
function ChatList({ contacts }: { contacts: ChatContact[] }) {
  const [selected, setSelected] = useState(1);

  return (
    <div
      className="hidden sm:flex flex-col flex-shrink-0 overflow-y-auto border-r border-gray-200"
      style={{ width: 230, background: "#fff" }}
    >
      <div className="px-3.5 py-2.5 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900 mb-2">Michael Johnson</p>
        <div className="relative">
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400"
            width="13" height="13"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            className="w-full pl-7 pr-3 py-1.5 border border-gray-200 rounded-md text-xs text-gray-700 outline-none focus:border-blue-400"
            placeholder="Search Chat"
          />
        </div>
      </div>
      <div className="flex items-center justify-between px-3.5 py-1.5 border-b border-gray-100">
        <span className="text-xs font-medium text-gray-700">Open ▾</span>
        <span className="text-xs font-medium text-gray-700">Newest ▾</span>
      </div>

      {contacts.map((c) => (
        <button
          key={c.id}
          onClick={() => setSelected(c.id)}
          className="flex gap-2.5 px-3.5 py-3 border-b border-gray-50 cursor-pointer text-left transition-colors w-full"
          style={{ background: selected === c.id ? "#f0f7ff" : "#fff" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
            style={{ background: c.avatarColor }}
          >
            {c.initial}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex justify-between mb-0.5">
              <span className="text-xs font-semibold text-gray-900">{c.name}</span>
              <span className="text-xs text-gray-400">{c.time}</span>
            </div>
            <p className="text-xs text-gray-500 truncate">{c.preview}</p>
          </div>
        </button>
      ))}

      {/* Skeleton placeholder */}
      <div className="flex gap-2.5 px-3.5 py-3 opacity-40">
        <Shimmer className="w-8 h-8 rounded-full flex-shrink-0" />
        <div className="flex-1 flex flex-col gap-1.5">
          <Shimmer className="h-2.5 w-3/4 rounded" />
          <Shimmer className="h-2.5 w-full rounded" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CONVERSATION PANEL
───────────────────────────────────────── */
function ConversationPanel({ messages }: { messages: ChatMessage[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex-1 min-w-0 flex flex-col border-r border-gray-200" style={{ background: "#fff" }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-900">Olivia Mckinsey</span>
        <div className="flex gap-1.5 items-center">
          <button className="text-gray-400 px-1 text-lg leading-none">⋯</button>
          <button className="px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 bg-gray-900 text-white">
            🌙
          </button>
          <button className="px-2.5 py-1 rounded-md text-xs font-medium border border-gray-200 bg-white text-gray-700">
            ⬛
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3" style={{ background: "#fafafa" }}>
        <div className="text-center">
          <span className="text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded-full">
            28 August 2025
          </span>
        </div>

        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col gap-0.5 ${m.sender === "ai" ? "items-end" : "items-start"}`}
          >
            <span className="text-xs text-gray-400 mx-1">{m.time}</span>
            <div
              className="px-3 py-2 text-sm max-w-xs"
              style={
                m.sender === "ai"
                  ? { background: "#4f46e5", color: "#fff",     borderRadius: "12px 12px 2px 12px" }
                  : { background: "#f3f4f6", color: "#111827",  borderRadius: "12px 12px 12px 2px" }
              }
            >
              {m.text}
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="px-4 py-2.5 border-t border-gray-100 flex gap-2">
        <input
          className="flex-1 px-3 py-1.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-400"
          placeholder="Type a message..."
        />
        <button className="px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg font-medium hover:bg-indigo-700 transition-colors">
          Send
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   DETAILS PANEL
───────────────────────────────────────── */
function DetailsPanel() {
  return (
    <div
      className="hidden lg:block flex-shrink-0 overflow-y-auto p-3.5"
      style={{ width: 220, background: "#fff" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-900">Details</span>
        <button className="text-gray-400 text-sm">⬛</button>
      </div>

      {/* Chat Data */}
      <div className="border border-gray-100 rounded-lg p-2.5 mb-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-700">Chat Data</span>
          <span className="text-gray-400 text-xs">▾</span>
        </div>
        <DetailRow label="Assignee" value="James West"  avatarColor="#7c3aed" initial="J" />
        <DetailRow label="Team"     value="Sales Team"  avatarColor="#22c55e" initial="S" />
      </div>

      {/* Contact Data */}
      <div className="border border-gray-100 rounded-lg p-2.5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-gray-700">Contact Data</span>
          <span className="text-gray-400 text-xs">▾</span>
        </div>
        <SimpleDetailRow label="First Name" value="Olivia" />
        <SimpleDetailRow label="Last Name"  value="Mckinsey" />
        <SimpleDetailRow label="Phone"      value="+1 (312) 555-0134" />
        <div className="flex justify-between items-center py-1 opacity-50">
          <span className="text-xs text-gray-400">Email</span>
          <Shimmer className="h-2.5 w-24 rounded" />
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  avatarColor,
  initial,
}: {
  label: string;
  value: string;
  avatarColor: string;
  initial: string;
}) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-xs text-gray-400">{label}</span>
      <div className="flex items-center gap-1">
        <div
          className="w-4 h-4 rounded-full flex items-center justify-center text-white"
          style={{ background: avatarColor, fontSize: 9, fontWeight: 700 }}
        >
          {initial}
        </div>
        <span className="text-xs font-medium text-gray-900">{value}</span>
      </div>
    </div>
  );
}

function SimpleDetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-xs font-medium text-gray-900">{value}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SHIMMER
───────────────────────────────────────── */
function Shimmer({ className }: { className?: string }) {
  return (
    <div
      className={className}
      style={{
        background: "linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
function InboxIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18A2.25 2.25 0 004.5 20.25h15A2.25 2.25 0 0021.75 18v-4.162" />
    </svg>
  );
}

function ContactsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );
}

function SparkleIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  );
}

function WorkflowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function CampaignIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  );
}

function ChartIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
    </svg>
  );
}

function SettingsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function UserIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function UsersIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
    </svg>
  );
}

function QuestionIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
    </svg>
  );
}
