import React from "react";
import ClientfacingLinks from "../accordions/ClientfacingLinks";
import { ClientFacinglinksitems , Saleslinksitems } from "./linkitems";


const SidebarLinks = () => {
  const Titles = {
    Clientfacing: "Client facing",
    Sales: "Sales",
    Management : "Managements"
  };
  return (
    <div className="space-y-6">
      <ClientfacingLinks Titles={Titles.Clientfacing} linkitems={ClientFacinglinksitems} />
      <ClientfacingLinks Titles={Titles.Sales} linkitems={Saleslinksitems} />
      <ClientfacingLinks Titles={Titles.Management} />
    </div>
  );
};

export default SidebarLinks;
