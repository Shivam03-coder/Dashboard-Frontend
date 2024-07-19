import { IconButton, Typography } from "@material-tailwind/react";
import { FiAlignCenter } from "react-icons/fi";
import { GrCodeSandbox } from "react-icons/gr";

export function Nav({ IsMobileView, IssidebarOpen, setIssidebarOpen }) {
  function handleOnsidebar() {
    setIssidebarOpen(!IssidebarOpen);
  }
  return (
    <nav className="p-2 sticky  h-max top-0 flex justify-between flex-1 flex-grow">
      <section className="px-3 flex items-center gap-4">
        {IsMobileView ? (
          <IconButton
            onClick={handleOnsidebar}
            className="bg-transparent "
            size="md"
          >
            <FiAlignCenter className="size-8 " />
          </IconButton>
        ) : (
          <IconButton className="bg-transparent " size="md">
            <GrCodeSandbox className="size-10 " />
          </IconButton>
        )}
        <div className={`${IsMobileView ? "hidden" : "block"}`}>
          <Typography variant="h3" >FINNANCE TRACKER</Typography>
        </div>
      </section>
    </nav>
  );
}

export default Nav;
