import { Typography } from "@material-tailwind/react";
import React from "react";

const Pageheader = ({ title, subtitle }) => {
  return (
    <div className="mx-10 my-2 md:my-5">
      <Typography variant="h3">{title}</Typography>
      <Typography>{subtitle}</Typography>
    </div>
  );
};

export default Pageheader;
