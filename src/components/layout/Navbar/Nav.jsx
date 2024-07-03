import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Input,
} from "@material-tailwind/react";

import { FiAlignCenter } from "react-icons/fi";
import ProfileMenu from "./Profilemenu/ProfileMenu";
import Searchbar from "../../shared/Searchbar/Searchbar";

export function Nav() {
  return (
    <nav className="p-2">
      {/* SERACHING BAR */}
      <section className="px-3 flex items-center gap-4">
        <IconButton className="bg-transparent" size="md">
          <FiAlignCenter className="size-8" />
        </IconButton>
        <Searchbar />
      </section>
    </nav>
  );
}

export default Nav;
