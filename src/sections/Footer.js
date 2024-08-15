import { Typography, Avatar, IconButton } from "@material-tailwind/react";
import { Icon } from '@iconify/react';
import { useState, useEffect } from "react";
 
export function Footer() {

  const [lastCommit, setLastCommit] = useState(null);

  useEffect(() => {
    const fetchLastCommit = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/InhumanlyInsane/personal-website/commits?per_page=1');
        const data = await response.json();
        if (data && data.length > 0) {
          const lastCommitDate = new Date(data[0].commit.author.date).toLocaleDateString('id-ID');
          setLastCommit(lastCommitDate);
        }
      } catch (error) {
        console.error('Error fetching last commit:', error);
      }
    };

    fetchLastCommit();
  }, []);

  return (
    <footer className="w-full p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
        {/* <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}

        <div className="flex flex-row items-center gap-4">
          <Avatar
              src={process.env.PUBLIC_URL + '/image/brain-logo.jpeg'}
              alt="website icon"
              withBorder={true}
              color="teal"
              size="md"
          />

          <Typography className="font-primary text-white">
          Last Commit: {lastCommit ? lastCommit : 'Loading...'}
          </Typography>
        </div>

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-6">
          <Typography className="font-primary text-white">Follow and connect with me</Typography>
            <a href="https://www.linkedin.com/in/vincent-suhardi/" target="_blank">
              <li>
                <IconButton variant="text">
                  <Icon icon="mdi:linkedin" width="30" height="30" color="white"/>
                </IconButton>
              </li>
            </a>
          <li>
            <a href="https://github.com/InhumanlyInsane" target="_blank">
              <IconButton variant="text">
                <Icon icon="mdi:github" width="30" height="30" color="white"/>
              </IconButton>
            </a>
          </li>
          <li>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vinjupt@gmail.com" target="_blank">
              <IconButton variant="text">
                <Icon icon="ic:baseline-email" width="30" height="30" color="white"/>
              </IconButton>
            </a>
          </li>
          <li>
            <a href="https://wa.me/6289608842518" target="_blank">
              <IconButton variant="text">
                <Icon icon="ic:baseline-whatsapp" width="30" height="30" color="white"/>
              </IconButton>
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="teal" className="text-center font-logo">
        &copy; 2024 Vincent Suhardi
      </Typography>
    </footer>
  );
}