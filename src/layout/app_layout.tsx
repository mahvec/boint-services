import Navbar from "./navbar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../config/hooks";

export default function AppLayout() {
  return (
    <main className="min-h-screen w-full">
      <Navbar />

      <Outlet />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
