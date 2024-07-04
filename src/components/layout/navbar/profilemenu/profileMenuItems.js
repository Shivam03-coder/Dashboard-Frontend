import { CgProfile } from "react-icons/cg";
import { CiEdit } from "react-icons/ci";
import { MdForwardToInbox } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";

export const profileMenuItems = [
    {
      label: "My Profile",
      icon: CgProfile,
    },
    {
      label: "Edit Profile",
      icon: CiEdit,
    },
    {
      label: "Inbox",
      icon: MdForwardToInbox,
    },
    {
      label: "Help",
      icon: FiHelpCircle,
    },
    {
      label: "Sign Out",
      icon: GoSignOut,
    },
  ];