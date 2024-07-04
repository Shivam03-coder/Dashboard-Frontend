import React, { useState } from "react";
import Nav from "./navbar/Nav";
import { Outlet } from "react-router-dom";
import useMediaquery from "../../hooks/useMediaquery";
import Sidebar from "./sidebar/Sidebar";
const Layout = () => {
  const IsMobileView = useMediaquery("720");
  const [IssidebarOpen, setIssidebarOpen] = useState(false);
  return (
    <div className="w-full flex justify-between">
      <Sidebar
        IsMobileView={IsMobileView}
        IssidebarOpen={IssidebarOpen}
        setIssidebarOpen={setIssidebarOpen}
      />
      <header className="relative">
        <Nav
          IsMobileView={IsMobileView}
          IssidebarOpen={IssidebarOpen}
          setIssidebarOpen={setIssidebarOpen}
        />
        <Outlet />
      </header>
    </div>
  );
};

export default Layout;
