import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  
export function CardItem({ icon, title, description }) {
  return (
    <Card className="cs:mt-6 w-[320px] xs:mt-2 cs:mb-20 xs:mb-4 cs:hover:scale-110 transition ease-in-out" style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>
      <CardBody>
        {icon}
        <Typography variant="h5" style={{ color: '#3BBA9C' }} className="mb-2 font-primary cs:text-xl xs:text-base">
          {title}
        </Typography>

        <hr className="border-t border-white mb-2 w-[250px]" />

        <Typography className="text-justify font-primary cs:text-base xs:text-xs" color="white">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
}