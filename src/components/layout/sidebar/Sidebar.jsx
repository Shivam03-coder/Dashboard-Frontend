import { Card, Drawer, Typography } from "@material-tailwind/react";
import SidebarMenu from "./SidebarMenu";

function Sidebar({ IsMobileView, IssidebarOpen, setIssidebarOpen }) {
  const closeSidebar = () => setIssidebarOpen(false);
  return (
    <>
      {IsMobileView ? (
        <Drawer open={IssidebarOpen} onClose={closeSidebar}>
          <Card
            className="min-h-screen h-full shadow-xl bg-primary-800 
         text-black rounded-none shadow-blue-gray-900/5"
          >
            <SidebarMenu />
          </Card>
        </Drawer>
      ) : (
        <Card
          className="min-h-screen h-full shadow-xl bg-primary-800 
                 text-black rounded-none shadow-blue-gray-900/5"
        >
          <SidebarMenu />
        </Card>
      )}
    </>
  );
}

export default Sidebar;
