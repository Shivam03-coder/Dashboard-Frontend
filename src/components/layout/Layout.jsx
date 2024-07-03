import React, { useState } from "react";
import Nav from "./Navbar/Nav";
import { Outlet } from "react-router-dom";
import useMediaquery from "../../hooks/useMediaquery";
import Sidebar from "./sidebar/Sidebar";
const Layout = () => {
  const IsMobileView = useMediaquery("720");
  const [IssidebarOpen, setIssidebarOpen] = useState(false);
  return (
    <div className={`w-full h-full flex`}>
      <Sidebar
        IsMobileView={IsMobileView}
        IssidebarOpen={IssidebarOpen}
        setIssidebarOpen={setIssidebarOpen}
      />
      <Nav IssidebarOpen={IssidebarOpen} setIssidebarOpen={setIssidebarOpen} />
    </div>
  );
};

export default Layout;
