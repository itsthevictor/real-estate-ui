import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./layout.scss";
const MainLayout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
