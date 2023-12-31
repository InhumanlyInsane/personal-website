import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
export function CardItem({ icon, title, description }) {
  return (
    <Card className="mt-6 w-[300px] mb-20">
      <CardBody>
        {icon && (
          <img
            src={process.env.PUBLIC_URL + icon}
            alt="Icon"
            className="mb-4 h-12 w-12"
          />
        )}
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="text-justify">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
