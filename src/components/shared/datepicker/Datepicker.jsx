import React from "react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import datepickerconfig from "./datepickerconfig";

function Datepicker({date, setDate}) {

  const startDate = new Date(2021, 0, 1); 
  const endDate = new Date(2021, 11, 31); 

  return (
    <div className="p-24 w-28">
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="Select a Date"
            onChange={() => null}
            value={date ? format(date, "yyyy-MM-dd") : ""}
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            fromDate={startDate}
            toDate={endDate}
            className="border-0"
            classNames={datepickerconfig}
            components={{
              IconLeft: ({ ...props }) => (
                <FaAngleLeft {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <FaAngleRight {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Datepicker;
