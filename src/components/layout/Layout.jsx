import React, { useState } from "react";
import Nav from "./Navbar/Nav";
import { Outlet } from "react-router-dom";
import useMediaquery from "../../hooks/useMediaquery";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
  const isMobileView = useMediaquery("720");
  const [IsSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className={`w-full h-full`}>
      <Nav />
    </div>
  );
};

export default Layout;
