import {
    Card,
    CardHeader,
    Typography,
} from "@material-tailwind/react";
import { Icon } from '@iconify/react';

export function SkillCard({ firstIcon, secondIcon, thirdIcon, iconSize, skill, specific, circled, twoIcons=false, threeIcons=false }) {

    return (

        
        <Card shadow={false} className="w-[250px] pb-6" style={ {background: "linear-gradient(to right bottom, #2E3047, #43455C"} }>

            <div className={`mt-[-20px] ml-5 flex flex-row gap-2`}>
                <div className={circled ? `rounded-full bg-white w-[${iconSize}] flex justify-center items-center` : ''}>
                    <Icon icon={firstIcon} style={{ fontSize: iconSize }} />
                </div>
                {twoIcons && (
                  <div className={circled ? `rounded-full bg-white w-[${iconSize}] flex justify-center items-center ml-2` : 'ml-2'}>
                      <Icon icon={secondIcon} style={{ fontSize: iconSize }} />
                  </div>
                )}
                {threeIcons && (
                  <div className={circled ? `rounded-full bg-white w-[${iconSize}] flex justify-center items-center ml-2` : 'ml-2'}>
                      <Icon icon={thirdIcon} style={{ fontSize: iconSize }} />
                  </div>
                )}
            </div>

            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="flex items-center gap-4"
            >
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <Typography variant="h4" style={{color: "#3BBA9C"}} className={`font-primary text-xl`}>
                            {skill}
                        </Typography>
                    </div>
                    <Typography style={{color: "#EFF1F3"}} className="font-primary">
                        {specific}
                    </Typography>
                </div>
                
            </CardHeader>
        </Card>
    );
}