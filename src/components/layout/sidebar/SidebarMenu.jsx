import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineForwardToInbox,
  MdAssignment,
} from "react-icons/md";
import { IoMdHome, IoMdNotifications } from "react-icons/io";
import { BsChatLeftTextFill } from "react-icons/bs";
import { Typography } from "@material-tailwind/react";
const SidebarMenu = () => {
  return (
    <>
        <div className="mb-5">
          <Typography
            variant="h3"
            className="bg-customeYellow text-black w-full text-center font-Varela p-3"
          >
            DASHBOARD
          </Typography>
        </div>
        <div className="navigations px-5 space-y-7 mt-9">
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <MdDashboard className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Dashboard
            </Typography>
          </Link>
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <IoMdHome className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Home
            </Typography>
          </Link>
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <BsChatLeftTextFill className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Chat
            </Typography>
          </Link>
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <MdOutlineForwardToInbox className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Inbox
            </Typography>
          </Link>
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <IoMdNotifications className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Notices
            </Typography>
          </Link>
          <Link
            className="text-secondary-prime flex items-center gap-3 p-2 rounded-xl bg-secondary-500"
            to={"/"}
          >
            <MdAssignment className="h-5 w-5" />
            <Typography variant="h6" className="font-normal">
              Assignment
            </Typography>
          </Link>
        </div>
    </>
  )
}

export default SidebarMenu
