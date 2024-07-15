import { TbPageBreak } from "react-icons/tb";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { TABLE_ROWS, TABLE_HEAD } from "./Tabledata";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  incrementPage,
  decrementPage,
} from "../../../app/slices/paginationSlice";

function Customertable({ Data, Toatlpages }) {
  console.log("🚀 ~ Customertable ~ Data:", Data);

  const [Pagenumber, setPagenumber] = useState(1);
  const [Lastbtn, setLastbtn] = useState(false);
  const [Nextbtn, setNextbtn] = useState(false);
  const dispatch = useDispatch();

  const handleincrementPageChange = () => {
    setPagenumber(Pagenumber + 1);
    dispatch(incrementPage(Pagenumber));
  };

  const handledecrementPageChange = () => {
    setPagenumber(Pagenumber - 1);
    dispatch(decrementPage(Pagenumber));
  };

  useEffect(() => {
    if (Pagenumber >= Toatlpages) {
      setNextbtn(true);
    }
    if (Pagenumber == 0) {
      setLastbtn(true);
    }
  }, [Pagenumber]);

  return (
    <Card className="h-full  rounded-none bg-primary-600 text-customeYellow-500  shadow-2xl">
      <CardBody className=" scrollbar-hidden px-0 py-0 ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-b border-blue-gray-100  p-4">
                  <Typography
                    variant="h5"
                    className="font-medium text-customeOrange-500 leading-none font-Inter"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  amount,
                  date,
                  status,
                  account,
                  accountNumber,
                  expiry,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography variant="small" className="font-bold">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {amount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <TbPageBreak className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t  p-4">
        <Button
          onClick={handledecrementPageChange}
          className="bg-pink-400"
          variant="filled"
          size="sm"
          disabled={Lastbtn}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton
            className="border-customePink-400"
            variant="outlined"
            size="sm"
          >
            1
          </IconButton>
          <IconButton variant="text" size="md">
            2
          </IconButton>
          <IconButton variant="text" size="md">
            3
          </IconButton>
          <IconButton variant="text" size="md">
            ...
          </IconButton>
          <IconButton variant="text" size="md">
            8
          </IconButton>
          <IconButton variant="text" size="md">
            9
          </IconButton>
          <IconButton variant="text" size="md">
            10
          </IconButton>
        </div>
        <Button
          onClick={handleincrementPageChange}
          className="bg-pink-400"
          variant="filled"
          size="sm"
          disabled={Nextbtn}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Customertable;
