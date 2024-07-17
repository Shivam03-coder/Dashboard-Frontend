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
import { TABLE_HEAD } from "./Tabledata";
import { useDispatch } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import {
  incrementPage,
  decrementPage,
} from "../../../app/slices/paginationSlice";

function Customertable({ Data, Toatlpages }) {
  const [Pagenumber, setPagenumber] = useState(1);
  const [Lastbtn, setLastbtn] = useState(true);
  const [Nextbtn, setNextbtn] = useState(false);
  const dispatch = useDispatch();

  const handleIncrementPageChange = useCallback(() => {
    setPagenumber((prevPageNumber) => prevPageNumber + 1);
    dispatch(incrementPage());
  }, [dispatch]);

  const handleDecrementPageChange = useCallback(() => {
    setPagenumber((prevPageNumber) => prevPageNumber - 1);
    dispatch(decrementPage());
  }, [dispatch]);

  useEffect(() => {
    setNextbtn(Pagenumber >= Toatlpages);
    setLastbtn(Pagenumber <= 1);
  }, [Pagenumber, Toatlpages]);

  return (
    <Card className="h-full    rounded-xl bg-primary-600 text-customeYellow-500  shadow-2xl">
      <CardBody className=" overflow-x-auto px-0 py-0 ">
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
            {Data?.map(
              (
                { name, email, phoneNumber, country, occupation, role },
                index
              ) => {
                const isLast = index === Data.length - 1;
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
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {phoneNumber}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {country}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {occupation}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography variant="small" className="font-normal">
                        {role}
                      </Typography>
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
          onClick={handleDecrementPageChange}
          className="bg-pink-400"
          variant="filled"
          size="sm"
          disabled={Lastbtn}
        >
          Previous
        </Button>
        <Button
          onClick={handleIncrementPageChange}
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
