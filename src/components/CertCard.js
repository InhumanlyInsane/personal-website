import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

   
export function CertCard({ roundedType }) {
    return (
        <Card className={`overflow-hidden ${roundedType}`} style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="ui/ux review check"
                />
            </CardHeader>

            <CardBody>
                <Typography variant="h4" color="blue-gray" className="font-primary text-xl text-white">
                UI/UX Review Check
                </Typography>
                <Typography variant="lead" color="gray" className="font-primary text-sm text-gray-300">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>

                <div className="flex items-center space-x-2 mt-6">
                    <div className="rounded-full bg-white border-white w-[40px] h-[40px] flex justify-center items-center">
                        <Icon icon="simple-icons:datacamp" color="#2dfe54" width={"25px"} height={"25px"} />

     
                    </div>
                    <Typography className="font-primary text-white text-sm">
                        Completed: January 10 2023
                    </Typography>
                </div>
                
            </CardBody>
        </Card>
    );
}