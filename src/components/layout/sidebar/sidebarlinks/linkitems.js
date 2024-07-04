import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoPersonAddOutline , IoEarthOutline} from "react-icons/io5";
import { MdOutlineRemoveRedEye  } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { TbPageBreak  , TbCalendarMonth , TbReportMoney} from "react-icons/tb";


const ClientFacinglinksitems = [
  {
    id: 1,
    icon: AiOutlineShoppingCart,
    label: "Products",
  },
  {
    id: 2,
    icon: IoPersonAddOutline,
    label: "Customers",
  },
  {
    id: 3,
    icon: TbReportMoney,
    label: "Transcations",
  },
  {
    id: 4,
    icon: IoEarthOutline,
    label: "Geography",
  },
];
const Saleslinksitems = [
  {
    id: 1,
    icon: MdOutlineRemoveRedEye,
    label: "Overview",
  },
  {
    id: 2,
    icon: BsCalendar2Date,
    label: "Daily",
  },
  {
    id: 3,
    icon: TbCalendarMonth,
    label: "Monthly",
  },
  {
    id: 4,
    icon: TbPageBreak,
    label: "Breakdown",
  },
];





export { ClientFacinglinksitems , Saleslinksitems };
