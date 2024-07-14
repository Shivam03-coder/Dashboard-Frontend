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
          className={`mx-auto size-6 transition-transform ${
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
        <NavLink className="mr-auto font-Inter font-normal text-customeYellow text-[1.2rem]">
          {Titles}
        </NavLink>
      </AccordionHeader>
      <AccordionBody className="py-1">
        <section className="p-0 mt-5 text-customeYellow space-y-3">
          {linkitems?.map(({ label, icon, id, path }, index) => {
            const Componenet = icon;
            return (
              <Typography
                key={id}
                onClick={() => setIsactive(id)}
                className={` transition-all ${
                  Isactive === index ? "bg-black" : ""
                } text-[1.1rem]  flex items-center py-3 px-5 rounded-2xl gap-5`}
              >
                <i>
                  <Componenet strokeWidth={3} className="size-5" />
                </i>
                <NavLink to={path} className="font-Inter font-medium">
                  {label}
                </NavLink>
              </Typography>
            );
          })}
        </section>
      </AccordionBody>
    </Accordion>
  );
};

export default Linksaccordion;
