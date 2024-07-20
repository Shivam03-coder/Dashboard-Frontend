import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { TbPageBreak, TbReportMoney } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";

const ClientFacinglinksitems = [
  {
    id: 0,
    icon: AiOutlineShoppingCart,
    label: "Products",
    path: "/",
  },
  {
    id: 1,
    icon: IoPersonAddOutline,
    label: "Customers",
    path: "/customer",
  },
  {
    id: 2,
    icon: TbReportMoney,
    label: "Transcations",
    path: "/transcations",
  },
];
const ManagementsLinks = [
  {
    id: 0,
    icon: RiAdminLine,
    label: "Admin",
    path: "/admin",
  },
];
const Saleslinksitems = [
  {
    id: 0,
    icon: MdOutlineRemoveRedEye,
    label: "Overview",
    path: "/overview",
  },
  {
    id: 1,
    icon: TbPageBreak,
    label: "Breakdown",
    path: "/breakdown",
  },
];

export { ClientFacinglinksitems, Saleslinksitems, ManagementsLinks };
