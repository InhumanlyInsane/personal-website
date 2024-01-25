import React from "react";
import '../index.css'
import { Icon } from '@iconify/react';
import {
  Drawer,
  Button, 
  Typography,
  IconButton,
  ThemeProvider
} from "@material-tailwind/react";

export function RightDrawer() {
    const [openRight, setOpenRight] = React.useState(false);

    const openDrawerRight = () => {
        setOpenRight(true);
        document.body.style.backgroundColor = "black";
    }
    const closeDrawerRight = () => setOpenRight(false);


    const theme = {
        drawer: {
            styles: {
                base: {
                    overlay: {
                        backdropBlur: "backdrop-blur-none",
                    }
                }
            }
        },
    }

    return (
        <React.Fragment>
            <div className="ml-1 mr-[-20px]">
              <IconButton variant="text" onClick={openDrawerRight}>
                <Icon icon="iconamoon:menu-burger-horizontal-light" width="30" height="30" color="white" />
              </IconButton>
            </div>

            <ThemeProvider value={theme}>
                <Drawer
                    placement="right"
                    open={openRight}
                    onClose={closeDrawerRight}
                    className="p-4"
                    style={theme}
                >
                    <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        Material Tailwind
                    </Typography>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerRight}
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    </IconButton>
                    </div>
                    <Typography color="gray" className="mb-8 pr-4 font-normal">
                    Material Tailwind features multiple React and HTML components, all
                    written with Tailwind CSS classes and Material Design guidelines.
                    </Typography>
                    <div className="flex gap-2">
                    <Button size="sm" variant="outlined">
                        Documentation
                    </Button>
                    <Button size="sm">Get Started</Button>
                    </div>
                </Drawer>
            </ThemeProvider>

            

        </React.Fragment>
    )
}