import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
export function CardItem({ icon, title, description }) {
  return (
    <Card className="mt-6 w-[300px] mb-20" style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>
      <CardBody>
        {icon}
        <Typography variant="h5" style={{ color: '#3BBA9C' }} className="mb-2 font-primary">
          {title}
        </Typography>

        <hr className="border-t border-white mb-2 w-[250px]" />

        <Typography className="text-justify font-primary" color="white">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}
