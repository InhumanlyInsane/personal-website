import {
    Card,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from "react";

export function SkillCard({ firstIcon, secondIcon, thirdIcon, skill, specific, circled, twoIcons=false, threeIcons=false }) {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);

    const iconSize = isMobile ? 50 / 1.5 : 50;

    return (

        
        <Card shadow={false} className="cs:w-[250px] xs:w-[160px] pb-4 hover:scale-110 transition ease-in-out" style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>

            <div className={`cs:mt-[-20px] cs:ml-5 xs:mt-[-5px] xs:ml-2 flex flex-row gap-2`}>
                <div className={circled ? `rounded-full bg-white cs:w-[${iconSize}px] flex justify-center items-center` : ''}>
                    <Icon icon={firstIcon} style={{ fontSize: `${iconSize}px` }} />
                </div>
                {twoIcons && (
                    <div className={circled ? `rounded-full bg-white cs:w-[${iconSize}px] flex justify-center items-center ml-2` : 'cs:ml-2'}>
                        <Icon icon={secondIcon} style={{ fontSize: `${iconSize}px` }} />
                    </div>
                )}
                {threeIcons && (
                    <div className={circled ? `rounded-full bg-white cs:w-[${iconSize}px] flex justify-center items-center ml-2` : 'cs:ml-2'}>
                        <Icon icon={thirdIcon} style={{ fontSize: `${iconSize}px` }} />
                    </div>
                )}
            </div>

            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="flex items-center gap-4 rounded-none"
            >
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h4" style={{color: "#3BBA9C"}} className={`font-primary cs:text-xl xs:text-sm`}>
                            {skill}
                        </Typography>
                    </div>
                    <Typography style={{color: "#EFF1F3"}} className="font-primary cs:text-base xs:text-sm">
                        {specific}
                    </Typography>
                </div>
                
            </CardHeader>
        </Card>
    );
}