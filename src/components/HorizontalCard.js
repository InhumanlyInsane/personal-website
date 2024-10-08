import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
  export function HorizontalCard({ imageUrl, orgName, heading, description, link }) {
    return (
      <Card className="w-full h-full mr-5 cs:flex-row flex cs:items-stretch xs:items-center" style={ {background: "linear-gradient(to right bottom, #274060, #1B2845"} }>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 cs:w-2/5 cs:h-full shrink-0 cs:rounded-r-none xs:w-full xs:h-64 xs:rounded-none"
        >
          <img
            src={imageUrl}
            alt="card"
            className="cs:h-full xs:h-64 w-full object-cover"
          />
        </CardHeader>

        <CardBody className="cs:w-[550px] xs:w-[300px] flex flex-col justify-center">
          <Typography variant="h6" className="mb-4 uppercase cs:text-base xs:text-xs" style={{color: "#EFF1F3"}}>
            {orgName}
          </Typography>
          <Typography variant="h4" color="white" className="mb-2 cs:text-base xs:text-xs" style={{color: "#3BBA9C"}}>
            {heading}
          </Typography>
          <Typography className="mb-4 font-normal text-justify cs:text-base xs:text-xs" style={{color: "#DBD3D8"}}>
            {description}
          </Typography>
          <div className="flex flex-row items-center">
            <a href={link} className="inline-block" target="_blank">
              <Button variant="outlined" className="flex items-center gap-1 w-[150px] justify-center" color="white">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a> 
          </div>
        </CardBody>
      </Card>
    );
  }