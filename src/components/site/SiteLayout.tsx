import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingChat } from "./FloatingChat";
import { BackgroundBlobs } from "./BackgroundBlobs";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-x-clip">
      <BackgroundBlobs />
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingChat />
    </div>
  );
}
