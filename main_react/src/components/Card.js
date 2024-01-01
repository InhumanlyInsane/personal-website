import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
export function CardItem({ icon, title, description }) {
  return (
    <Card className="mt-6 w-[300px] mb-20" style={ {background: "linear-gradient(to right bottom, #274060, #1B2845"} }>
      <CardBody>
        {icon && (
          <img
            src={process.env.PUBLIC_URL + icon}
            alt="Icon"
            className="mb-4 h-12 w-12"
          />
        )}
        <Typography variant="h5" color="white" className="mb-2 font-primary">
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
