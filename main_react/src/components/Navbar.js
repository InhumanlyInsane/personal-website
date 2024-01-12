import React from "react";
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
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          Home
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          About Me
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          Projects
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          Organizations
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
          Awards
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="/#" className="flex items-center">
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
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
                <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
                >
                <span>Log In</span>
                </Button>
                <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                >
                <span>Sign in</span>
                </Button>
            </div>
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
                )}
            </IconButton>
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