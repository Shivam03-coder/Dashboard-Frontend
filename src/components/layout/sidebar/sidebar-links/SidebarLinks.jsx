import React from "react";
import Linksaccordion from "../sidebar-accordions/Linksaccordion";
import { ClientFacinglinksitems, Saleslinksitems,ManagementsLinks } from "./linkitems";

const SidebarLinks = () => {
  const Titles = {
    Clientfacing: "Client facing",
    Sales: "Sales",
    Management: "Managements",
  };
  return (
    <div className="space-y-6">
      <Linksaccordion
        Titles={Titles.Clientfacing}
        linkitems={ClientFacinglinksitems}
      />
      <Linksaccordion Titles={Titles.Sales} linkitems={Saleslinksitems} />
      <Linksaccordion Titles={Titles.Management} linkitems={ManagementsLinks} />
    </div>
  );
};

export default SidebarLinks;
