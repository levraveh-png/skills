import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { ScrollToTop } from "@/components/layout/ScrollToTop";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1 pb-16 xl:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
