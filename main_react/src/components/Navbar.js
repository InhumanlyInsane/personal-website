import React from "react";
import { Icon } from '@iconify/react';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@material-tailwind/react";
 
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
          <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
            Home
          </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
          About Me
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
          Projects
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
          Organizations
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
          Awards
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-logo text-base"
      >
        <a href="/#" className="duration-300 hover:text-gray-400 flex items-center">
          Certifications
        </a>
      </Typography>

    </ul>
  );
 
  return (
    <Navbar className="sticky top-0 z-10 rounded-none px-8 h-12" color="teal" variant="gradient">
        <div className="flex items-center justify-between text-blue-gray-900 h-full">
          <div className="flex gap-4 h-full mr-4 items-center">
              <Avatar
              src={process.env.PUBLIC_URL + '/image/lamp_cover.jpg'}
              alt="lamp_avatar"
              withBorder={true}
              size="sm"
              />

              <Typography
              as="a"
              href="#"
              className="cursor-pointer font-logo text-white text-lg"
              >
                  vincent_suhardi
              </Typography> 
          </div>

          <div className="flex items-center gap-4">
            <div className="mr-2 hidden lg:block">{navList}</div>

            <div className="border-l border-white mr-2 h-6"></div>
            
            <div className="flex items-center gap-0.5">
              <IconButton variant="text">
                <Icon icon="mdi:instagram" width="30" height="30" color="white"/>
              </IconButton>
              <IconButton variant="text">
                <Icon icon="mdi:linkedin" width="30" height="30" color="white"/>
              </IconButton>
              <IconButton variant="text">
                <Icon icon="mdi:github" width="30" height="30" color="white"/>
              </IconButton>
            </div>


          </div>
        </div>

        <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
                <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
                <span>Sign in</span>
            </Button>
            </div>
        </MobileNav>

    </Navbar>
  );
}