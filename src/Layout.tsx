import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const layout = () => {
  return (
    <>
      <NavBar />
      <main className="h-screen w-full">
        <Outlet />
      </main>
    </>
  );
};

export default layout;
