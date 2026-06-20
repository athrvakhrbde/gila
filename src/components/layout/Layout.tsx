import { Outlet } from "react-router-dom";
import { useScrollManager } from "../../hooks/useScrollManager";
import { Footer, Navbar } from "./Navbar";

export function Layout() {
  useScrollManager();

  return (
    <div className="min-h-screen bg-bg text-fg">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
