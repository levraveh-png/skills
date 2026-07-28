import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileContactBar } from "@/components/layout/MobileContactBar";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { PageTransition } from "@/components/motion/PageTransition";

export function Layout() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main id="main-content" className="flex-1 pb-16 xl:pb-0">
          <PageTransition />
        </main>
        <Footer />
        <MobileContactBar />
      </div>
    </SmoothScroll>
  );
}
