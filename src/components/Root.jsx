import React, { useState } from "react";
import Nav from "../components/layout/navbar/Nav";
import { Outlet } from "react-router-dom";
import useMediaquery from "../hooks/useMediaquery";
import Sidebar from "./layout/sidebar/Sidebar";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../app/api/userapi";

const Root = () => {
  const IsMobileView = useMediaquery("720");
  const [IssidebarOpen, setIssidebarOpen] = useState(false);

  const userId = useSelector(({ user }) => user.userId);
  // console.log("Root ~ userId:", userId);

  const { data } = useGetUserQuery(userId);
  // console.log("Root ~ data:", data)

  return (
    <div className="w-ful h-fulll flex justify-between">
      <Sidebar
        data={data || {}}
        IsMobileView={IsMobileView}
        IssidebarOpen={IssidebarOpen}
        setIssidebarOpen={setIssidebarOpen}
      />
      <header className="relative w-full">
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

export default Root;
