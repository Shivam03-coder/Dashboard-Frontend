import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Collapse,
} from "@material-tailwind/react";
import { useState } from "react";
import { Rating } from "@material-tailwind/react";

const ProductsCards = ({ Products }) => {
  const [Expand, setExpand] = useState(null);

  const handleOnexpand = (cardId) => {
    setExpand(Expand === cardId ? null : cardId);
  };
  const productsStat = Products.stats[0];
  const rating = Math.floor(Products.rating);
  return (
    <Card className="rounded-xl shadow-inner bg-primary-600 ">
      <CardBody className="text-white  font-Inter">
        <Typography variant="h6">{Products.category}</Typography>
        <Typography variant="lead">{Products.name}</Typography>
        <Typography variant="h6">${Products.price}</Typography>
        <Rating className="my-2" value={rating} />
        <Typography variant="h6">{Products.description}</Typography>
        <Button
          onClick={() => handleOnexpand(productsStat._id)}
          className="my-2 bg-customeYellow-400  text-black"
        >
          More
        </Button>
        <Collapse open={Expand === productsStat._id}>
          <Typography variant="h6">Supply left : {Products.supply}</Typography>
          <Typography variant="h6">
            Year sales : {productsStat.yearlySalesTotal}{" "}
          </Typography>
          <Typography variant="h6">
            Yearly sold units : {productsStat.yearlyTotalSoldUnits}
          </Typography>
        </Collapse>
      </CardBody>
    </Card>
  );
};

export default ProductsCards;
