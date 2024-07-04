import React, { useState } from "react";
import {
  Typography,
  List,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Linksaccordion = ({ Titles, linkitems }) => {
  const [open, setOpen] = React.useState(0);
  const [Isactive, setIsactive] = useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setIsactive(null);
  };
  return (
    <Accordion
      className="max-w-[240px] text-customeYellow"
      open={open === 1}
      icon={
        <IoIosArrowDown
          strokeWidth={2.5}
          className={`mx-auto h-4 w-4 transition-transform ${
            open === 1 ? "rotate-180" : ""
          }`}
        />
      }
    >
      <AccordionHeader
        onClick={() => handleOpen(1)}
        className={`border-b-0  rounded-xl  py-3 px-5 ${
          open === 1 ? "bg-black" : ""
        }`}
      >
        <Typography className="mr-auto font-Varela font-medium text-customeYellow text-[1.2rem]">
          {Titles}
        </Typography>
      </AccordionHeader>
      <AccordionBody className="py-1">
        <section className="p-0 mt-5 text-customeYellow space-y-3">
          {linkitems?.map(({ label, icon, id }, index) => {
            const Componenet = icon;
            return (
              <NavLink
                key={id}
                onClick={() => setIsactive(id)}
                className={` transition-all ${
                  Isactive === index ? "bg-black" : ""
                } text-[1.1rem]  flex items-center py-3 px-5 rounded-2xl gap-5`}
              >
                <i>
                  <Componenet strokeWidth={3} className="size-5" />
                </i>
                <Typography className="font-Inter font-medium" >{label}</Typography>
              </NavLink>
            );
          })}
        </section>
      </AccordionBody>
    </Accordion>
  );
};

export default Linksaccordion;
