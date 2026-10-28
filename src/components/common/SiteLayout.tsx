import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f8]">
      <Header />

      <div className="w-full flex-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}