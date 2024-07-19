import { Typography } from "@material-tailwind/react";
import SidebarLinks from "./SidebarLinks";
import { NavLink } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <>
      <div className="mb-5 p-3 sticky top-0 z-20  bg-customeYellow text-black">
        <Typography className="opacity-90 my-auto text-center font-Varela text-3xl text-black font-semibold">
          DASHBOARD
        </Typography>
      </div>
      <div className="md:hidden block">
        <Typography variant="h3" className="text-center">
          FINNANCE <br /> TRACKER
        </Typography>
      </div>
      <div className="navigations px-5 space-y-7 mt-6 text-customeYellow">
        <SidebarLinks />
      </div>
    </>
  );
};

export default SidebarMenu;
