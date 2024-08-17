import React from "react";
import '../index.css';
import { Icon } from '@iconify/react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
import { RightDrawer } from "./Drawer";
 
export function StickyNavbar({ scrollToSection }) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-row gap-2 lg:mb-0 lg:mt-0 items-center lg:gap-6">

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a 
          href="#about-me" 
          className="duration-300 hover:text-gray-400 flex items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('#about-me');}}
        >
          About Me
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a 
          href="#projects" 
          className="duration-300 hover:text-gray-400 flex items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('#projects');}}
        >
          Projects
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a 
          href="#awards" 
          className="duration-300 hover:text-gray-400 flex items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('#awards');}}
        >
          Awards
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a 
          href="#organizations" 
          className="duration-300 hover:text-gray-400 flex items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('#organizations');}}
        >
          Organizations
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a 
          href="#about-me" 
          className="duration-300 hover:text-gray-400 flex items-center"
          onClick={(e) => { e.preventDefault(); scrollToSection('#skillsets');}}
        >
          Skillsets
        </a>
      </Typography>

    </ul>
  );

 
  return (
    <Navbar id="navbar" className="sticky top-0 z-10 rounded-none cs:px-8 xs:px-4 h-12" color="teal" variant="gradient">
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <div className="flex cs:gap-4 xs:gap-2 h-full items-center">
              <Avatar
              src={process.env.PUBLIC_URL + '/image/brain-logo.jpeg'}
              alt="website icon"
              withBorder={true}
              color="teal"
              size="sm"
              className=""
              />

              <Typography
              as="a"
              href="#"
              onClick={(e) => { e.preventDefault(); scrollToSection('#top')}}
              className="cursor-pointer font-logo text-white cs:text-lg xs:text-base"
              >
                  vincent_suhardi
              </Typography> 
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-2 xs:hidden cs:block">{navList}</div>

            <div className="border-l border-white mr-2 h-6 xs:hidden cs:block"></div>
            
            <div className="flex items-center gap-0.5">
              <a href="https://www.linkedin.com/in/vincent-suhardi/" target="_blank">
                <IconButton variant="text">
                  <Icon icon="mdi:linkedin" width="30" height="30" color="white"/>
                </IconButton>
              </a>
              <a href="https://github.com/InhumanlyInsane" target="_blank">
                <IconButton variant="text">
                  <Icon icon="mdi:github" width="30" height="30" color="white"/>
                </IconButton>
              </a>
              <div className="cs:hidden">
                <RightDrawer scrollToSection={scrollToSection} />
              </div>
            </div>

          </div>

        </div>

    </Navbar>
  );
}