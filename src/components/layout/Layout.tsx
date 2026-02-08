import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchDialog from "@/components/shared/SearchDialog";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <SearchDialog />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
