import React from "react";
import '../index.css'
import { Icon } from '@iconify/react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    ThemeProvider,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
} from "@material-tailwind/react";

const theme = {
    drawer: {
        styles: {
            base: {
                overlay: {
                    backdropBlur: "backdrop-blur-none",
                    backgroundOpacity: "bg-opacity-50"
                }
            }
        },
    }
}

export function RightDrawer({ scrollToSection }) {
    const [openRight, setOpenRight] = React.useState(false);

    const openDrawerRight = () => {
    setOpenRight(true);
    document.getElementById('root').classList.add('dim-background');
    };

    const closeDrawerRight = () => {
    setOpenRight(false);
    document.getElementById('root').classList.remove('dim-background');
    };

    return (
        <ThemeProvider value={theme}>
            <React.Fragment>
            <div className="flex flex-wrap gap-4">
                <IconButton onClick={openDrawerRight} variant="text">
                    <Icon icon="iconamoon:menu-burger-horizontal" width="30" height="30" color="white"/>
                </IconButton>
            </div>
            
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="p-4 w-2/3 bg-gradient-to-b from-gray-900 to-black"
            >
                <div className="mb-2 flex items-center justify-between">
                    <Typography variant="h5" className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                        Navigation
                    </Typography>
                    <IconButton
                        variant="text"
                        color="white"
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
                <div className="flex items-center flex-col">
                    <a 
                        href="#about-me"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#about-me');
                            closeDrawerRight();
                        }}
                    >
                        <List>
                            <ListItem className="active:bg-gray-700 focus:bg-gray-700">
                                <ListItemPrefix>
                                    <Icon icon={'material-symbols:person'} className="text-3xl text-white"  />
                                </ListItemPrefix>
                                <Typography className="font-primary font-bold text-lg text-white" >About Me</Typography>
                            </ListItem>
                        </List>
                    </a>
                    
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#projects');
                            closeDrawerRight();
                        }}
                    >
                        <List>
                            <ListItem className="active:bg-gray-700 focus:bg-gray-700">
                                <ListItemPrefix>
                                    <Icon icon={'ant-design:project-filled'} className="text-3xl text-white"  />
                                </ListItemPrefix>
                                <Typography className="font-primary font-bold text-lg text-white" >Projects</Typography>
                            </ListItem>
                        </List>
                    </a>
                    
                    <a
                        href="#awards"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#awards');
                            closeDrawerRight();
                        }}
                    >
                        <List>
                            <ListItem className="active:bg-gray-700 focus:bg-gray-700">
                                <ListItemPrefix>
                                    <Icon icon={'material-symbols:trophy'} className="text-3xl text-white"  />
                                </ListItemPrefix>
                                <Typography className="font-primary font-bold text-lg text-white" >Awards</Typography>
                            </ListItem>
                        </List>
                    </a>

                    <a
                        href="#organizations"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#organizations');
                            closeDrawerRight();
                        }}
                    >
                        <List>
                            <ListItem className="active:bg-gray-700 focus:bg-gray-700">
                                <ListItemPrefix>
                                    <Icon icon={'clarity:group-solid'} className="text-3xl text-white"  />
                                </ListItemPrefix>
                                <Typography className="font-primary font-bold text-lg text-white" >Organizations</Typography>
                            </ListItem>
                        </List>
                    </a>
                    
                    <a
                        href="#skillsets"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#skillsets');
                            closeDrawerRight();
                        }}
                    >
                        <List>
                            <ListItem className="active:bg-gray-700 focus:bg-gray-700">
                                <ListItemPrefix>
                                    <Icon icon={'bi:person-fill-gear'} className="text-3xl text-white"  />
                                </ListItemPrefix>
                                <Typography className="font-primary font-bold text-lg text-white" >Skillsets</Typography>
                            </ListItem>
                        </List>
                    </a>
                    
                    
                </div>
                <footer className="mt-[160px]">
                    <hr className="my-8 border-blue-gray-50" />

                    <Typography color="teal" className="text-center font-logo">
                        &copy; 2024 Vincent Suhardi
                    </Typography>
                </footer>
            </Drawer>
            
            </React.Fragment>
        </ThemeProvider>
    );
}