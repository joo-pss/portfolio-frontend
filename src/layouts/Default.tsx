import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function Default() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-2xl px-8 py-14">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
