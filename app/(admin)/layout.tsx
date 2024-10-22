import DashboardNav from "@/components/DashboardNav";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admin for Next Blog",
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="bg-blue-950 text-white w-60 h-screen p-6 lg:fixed">
        <div className="text-center mb-10">
          <Image
            src="/noavatar.png"
            width="80"
            height="80"
            alt=""
            className="w-24 h-24 object-cover mx-auto rounded-full"
          />
          <h2 className="text-xl mt-4">John Doe</h2>
          <p className="text-gray-400">johndoe@company.com</p>
        </div>
        <DashboardNav />
      </aside>
      <aside className="bg-blue-900 text-white w-60 h-screen p-6 hidden lg:block"></aside>
      {/* Main Dashboard */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default layout;
