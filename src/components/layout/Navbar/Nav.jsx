import React, { useState } from "react";
import { IconButton } from "@material-tailwind/react";
import { DiAptana } from "react-icons/di";
import { FiAlignCenter } from "react-icons/fi";
import ProfileMenu from "./Profile/ProfileMenu";
import Searchbar from "../../shared/Searchbar/Searchbar";

export function Nav({ IssidebarOpen, setIssidebarOpen }) {
  function handleOnsidebar() {
    setIssidebarOpen(!IssidebarOpen);
  }
  return (
    <nav className="p-2 h-max top-0 flex justify-between flex-1 flex-grow">
      <section className="px-3 flex items-center gap-4">
        <IconButton onClick={handleOnsidebar} className="bg-transparent" size="md">
          <FiAlignCenter className="size-8" />
        </IconButton>
        <div className="searchbar hidden md:block">
          <Searchbar />
        </div>
      </section>
      <section className="Row-center gap-x-8">
        <IconButton
          
          className="bg-transparent shadow-none"
          size="md"
        >
          <DiAptana className="size-6" />
        </IconButton>
        <ProfileMenu />
      </section>
    </nav>
  );
}

export default Nav;
