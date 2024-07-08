import { Card, Drawer } from "@material-tailwind/react";
import SidebarMenu from "./sidebarmenu/SidebarMenu";

function Sidebar({ IsMobileView, IssidebarOpen, setIssidebarOpen }) {
  const closeSidebar = () => setIssidebarOpen(false);
  return (
    <>
      {IsMobileView ? (
        <Drawer  open={IssidebarOpen} onClose={closeSidebar}>
          <Card
            className="h-screen overflow-y-auto relative min-w-[290px] shadow-xl bg-primary-800 
         text-black rounded-none shadow-blue-gray-900/5"
          >
            <SidebarMenu />
          </Card>
        </Drawer>
      ) : (
          <Card
          className="scrollbar-hidden h-screen overflow-y-auto relative min-w-[240px]  shadow-xl bg-primary-800 
                 text-black rounded-none shadow-blue-gray-900/5"
        >
            <SidebarMenu IsMobileView={IsMobileView} />
        </Card>
      )}
    </>
  );
}

export default Sidebar;
