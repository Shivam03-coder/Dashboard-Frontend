import React, { useState } from "react";
import Nav from "./navbar/Nav";
import { Outlet } from "react-router-dom";
import useMediaquery from "../../hooks/useMediaquery";
import Sidebar from "./sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../../app/api/userapi";

const Layout = () => {
  const IsMobileView = useMediaquery("720");
  const [IssidebarOpen, setIssidebarOpen] = useState(false);

  const userId = useSelector(({user}) => user.userId);
  console.log("Layout ~ userId:", userId)
   
  const Response = useGetUserQuery(userId)
  // console.log("Layout ~ Response:", Response)
  
  

  return (
    <div className="w-ful h-fulll flex justify-between">
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
