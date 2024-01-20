import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

   
export function CertCard({ title, roundedType, imageUrl, iconLogo, iconColor }) {
    return (
        <Card className={`overflow-hidden ${roundedType}`} style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="rounded-none"
            >
                <img
                src={imageUrl}
                alt="certificate"
                className="m-0"
                />
            </CardHeader>

            <CardBody>
                <Typography variant="h4" style={{color: "#3BBA9C"}} className="font-primary text-xl text-white">
                    {title}
                </Typography>
                <Typography variant="lead" color="gray" className="font-primary text-sm text-gray-300">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>

                <div className="flex items-center space-x-2 mt-6">
                    <div className="rounded-full bg-white border-white w-[40px] h-[40px] flex justify-center items-center">
                        <Icon icon={iconLogo} color={iconColor} width={"25px"} height={"25px"} />

     
                    </div>
                    <Typography className="font-primary text-white text-sm">
                        Completed: January 10 2023
                    </Typography>
                </div>
                
            </CardBody>
        </Card>
    );
}