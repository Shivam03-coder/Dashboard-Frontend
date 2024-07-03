import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineForwardToInbox,
  MdAssignment,
} from "react-icons/md";
import { IoMdHome, IoMdNotifications } from "react-icons/io";
import { BsChatLeftTextFill } from "react-icons/bs";

function Sidebar() {
  return (
    <Card className="min-h-screen h-full w-[14rem] p-4 shadow-xl bg-blue-gray-700  rounded-none shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography
          variant="h3"
          className="text-secondary-prime text-center font-Varela"
        >
          AMS
        </Typography>
      </div>
      <div className="navigations space-y-4">
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <MdDashboard className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Dashboard
          </Typography>
        </Link>
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <IoMdHome className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Home
          </Typography>
        </Link>
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <BsChatLeftTextFill className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Chat
          </Typography>
        </Link>
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <MdOutlineForwardToInbox className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Inbox
          </Typography>
        </Link>
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <IoMdNotifications className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Notices
          </Typography>
        </Link>
        <Link
          className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-blue-gray-200"
          to={"/"}
        >
          <MdAssignment className="h-5 w-5" />
          <Typography variant="h6" className="font-normal">
            Assignment
          </Typography>
        </Link>
      </div>
    </Card>
  );
}

export default Sidebar;
