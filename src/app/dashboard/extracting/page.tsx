import Sidebar from "@/components/layout/Sidebar";
import ChatList from "@/components/layout/ChatList";
import ChatWindow from "@/components/layout/ChatWindow";
import DetailsPanel from "@/components/layout/DetailsPanel";



export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-[5.61px]">

      <div className="w-full max-w-[100%] h-[90vh] h-screen bg-white rounded-lg shadow flex overflow-hidden">

        <Sidebar />

        <ChatList />

        <ChatWindow />

        <DetailsPanel />

      </div>

    </div>
  );
}

