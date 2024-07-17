import { IoSearchSharp } from "react-icons/io5";

import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { TABLE_HEAD } from "./Transcationtabledata";
import { IoDownloadOutline } from "react-icons/io5";
import { useCallback } from "react";

function Transcationtable({ Data, page, setPage, setPageSize, setSearch }) {
  const handlePagenext = useCallback(() => {
    setPage((previousState) => previousState + 1);
  }, [setPage]);
  const handlePageprevious = useCallback(() => {
    setPage((previousState) => previousState - 1);
  }, [setPage]);
  const handleOnchange = (e) => {
    setSearch(e.target.value)
  };

  return (
    <Card className="h-full w-full bg-primary-500">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none bg-primary-500"
      >
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5">Recent Transactions</Typography>
            <Typography className="mt-1 font-normal">
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <form>
                <Input
                  className="text-white font-Inter"
                  color="orange"
                  label="Search"
                  onChange={handleOnchange}
                  icon={<IoSearchSharp className="size-6 cursor-pointer " />}
                />
              </form>
            </div>
            <Button
              className="flex bg-customePink-400 items-center gap-3"
              size="sm"
            >
              <IoDownloadOutline
                color="black"
                strokeWidth={4}
                className="size-6"
              />{" "}
              Download
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardBody className=" overflow-x-auto px-0 py-0 ">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className="border-y border-blue-gray-100  p-4">
                  <Typography
                    variant="h6"
                    className="font-Inter text-lg font-bold leading-none text-customeOrange-500 opacity-100"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Data?.map(({ _id, userId, createdAt, products, cost }, index) => {
              const isLast = index === Data.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              let date = new Date(createdAt);
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: true,
              };

              const formattedDate = date.toLocaleString("en-US", options);

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <Typography variant="h6" className="font-bold">
                        {_id}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="h6" className="font-normal font-Inter">
                      {userId}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="h6" className="font-normal font-Inter">
                      {formattedDate}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="h6" className="font-normal font-Inter">
                      {products.length}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography variant="h6" className="font-normal font-Inter">
                      ${cost}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button
          onClick={handlePageprevious}
          className="bg-pink-400"
          variant="filled"
          size="sm"
          disabled={page === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <Typography className="text-white" variant="h5">
            {page}/500
          </Typography>
        </div>
        <Button
          onClick={handlePagenext}
          className="bg-pink-400"
          variant="filled"
          size="sm"
          disabled={page === 500}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
export default Transcationtable;
