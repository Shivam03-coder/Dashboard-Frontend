import Searchbar from "../../shared/Searchbar/Searchbar";
import SidebarLinks from "./sidebarlinks/SidebarLinks";

const SidebarMenu = ({ IsMobileView }) => {
  return (
    <>
      <div className="mb-5 p-3 sticky top-0 z-20  bg-customeYellow text-black">
        <h5 className="opacity-90 my-auto text-center font-Varela text-3xl text-black font-semibold">
          DASHBOARD
        </h5>
      </div>
      <div className="md:hidden block">
        <Searchbar />
      </div>
      <div className="navigations px-5 space-y-7 mt-6 text-customeYellow">
        <SidebarLinks />
      </div>
    </>
  );
};

export default SidebarMenu;
