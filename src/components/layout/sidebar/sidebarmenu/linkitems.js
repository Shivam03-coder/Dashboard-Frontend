import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonAddOutline, IoEarthOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye, MdOutlineCalendarToday } from "react-icons/md";
import { TbPageBreak, TbCalendarMonth, TbReportMoney } from "react-icons/tb";
import { RiAdminLine } from "react-icons/ri";
import { GrDocumentPerformance } from "react-icons/gr";

const ClientFacinglinksitems = [
  {
    id: 0,
    icon: AiOutlineShoppingCart,
    label: "Products",
    path: "/products",
  },
  {
    id: 1,
    icon: IoPersonAddOutline,
    label: "Customers",
    path: "/products",
  },
  {
    id: 2,
    icon: TbReportMoney,
    label: "Transcations",
    path: "/transcations",
  },
  {
    id: 3,
    icon: IoEarthOutline,
    label: "Geography",
    path: "/geography",
  },
];
const ManagementsLinks = [
  {
    id: 0,
    icon: RiAdminLine,
    label: "Overview",
  },
  {
    id: 1,
    icon: GrDocumentPerformance,
    label: "Performance",
  },
];
const Saleslinksitems = [
  {
    id: 0,
    icon: MdOutlineRemoveRedEye,
    label: "Overview",
  },
  {
    id: 1,
    icon: MdOutlineCalendarToday,
    label: "Daily",
  },
  {
    id: 2,
    icon: TbCalendarMonth,
    label: "Monthly",
  },
  {
    id: 3,
    icon: TbPageBreak,
    label: "Breakdown",
  },
];

export { ClientFacinglinksitems, Saleslinksitems, ManagementsLinks };
