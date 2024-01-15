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
                <Typography variant="h4" color="blue-gray">
                UI/UX Review Check
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                Because it&apos;s about motivating the doers. Because I&apos;m here to
                follow my dreams and inspire others.
                </Typography>

                <div className="flex items-center space-x-10 mt-6">
                    <div className="rounded-full bg-white border-white w-[40px] h-[40px] flex justify-center items-center">
                        <Icon icon="simple-icons:datacamp" color="#2dfe54" width={"30px"} height={"30px"} />
                    </div>
                    <Typography className="font-primary">
                        Completed: January 10 2023
                    </Typography>
                </div>
                
            </CardBody>
            {/* <CardFooter className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                <Tooltip content="Natali Craig">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="natali craig"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                <Tooltip content="Tania Andrew">
                    <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    className="border-2 border-white hover:z-10"
                    />
                </Tooltip>
                </div>
                <Typography className="font-normal">January 10</Typography>
            </CardFooter> */}
        </Card>
    );
}