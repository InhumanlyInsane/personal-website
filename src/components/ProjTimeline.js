import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
    Button
  } from "@material-tailwind/react";
   
  export function ProjectTimeline() {
    return (
        <Timeline>

          <TimelineItem>
            <TimelineConnector />

            <div className="flex flex-row">
                
                <div>
                    <TimelineHeader>
                    <TimelineIcon className="p-2 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="white" className="font-primary" style={{ color: '#3BBA9C' }}>
                        Vehicle Plate Detection OCR
                    </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 w-[700px]">

                        <Typography color="white" className="font-primary text-justify mb-5">    
                            A computer vision project focused on character detection from vehicle plates, utilizing YOLOv8 and a 
                            custom model in conjunction with OpenCV for image processing, along with Keras and Tensorflow for 
                            modeling. Obtaining the dataset from the Satria Data Competition 2023, I meticulously labeled 
                            individual characters within the vehicle plate images using labelImg, creating precise bounding 
                            boxes for each character. This meticulous data preprocessing ensured accurate character detection, 
                            refining the dataset for optimal model training. The integration of advanced models and meticulous 
                            data annotation resulted in a robust system proficient in reliably detecting characters on vehicle 
                            plates, showcasing innovative computer vision techniques.
                        </Typography>

                        <a href="https://www.kaggle.com/code/vincentsuhardi/vehicle-plate-detection-ocr" target="_blank">
                            <Button className="flex items-center gap-3" style={{ backgroundColor: '#3BBA9C' }}>
                                See More
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Button>
                        </a>

                    </TimelineBody>
                </div>

                <div className="w-full h-full ml-10 mr-10 mt-10">
                    <img
                        className="rounded-xl object-center shadow-xl shadow-blue-gray-900/50 border-2 border-black"
                        src={process.env.PUBLIC_URL + '/image/cv_project1.jpeg'}
                        alt="Profile"
                    />

                    <img
                        className="ml-5 mt-[-50px] rounded-xl object-center shadow-xl shadow-blue-gray-900/50 border-2 border-black relative"
                        src={process.env.PUBLIC_URL + '/image/cv_project2.jpeg'}
                        alt="Profile"
                    />
                </div>
            </div>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />

            <div className="flex flex-row">
            
                <div>
                    <TimelineHeader>
                    <TimelineIcon className="p-2 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clipRule="evenodd" />
                            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="white" className="font-primary" style={{ color: '#3BBA9C' }}>
                        Churn Analysis Dashboard
                    </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 w-[700px]">
                        <Typography color="white" className="font-primary text-justify mb-5">
                        A sophisticated, data-driven solution designed to unravel the intricacies behind customer attrition in 
                        the telecom industry. This comprehensive dashboard offers a holistic view of churn rates over time, 
                        segmented customer behavior analysis, predictive insights, and key drivers influencing churn. By 
                        leveraging Tableau as a data visualization software, this project provides actionable insights for 
                        stakeholders to develop targeted retention strategies, empowering telecom companies to proactively 
                        address churn, enhance customer satisfaction, and drive sustainable business growth through informed 
                        decision-making.
                        </Typography>

                        <a href="https://public.tableau.com/app/profile/vincent.suhardi/viz/DataScienceChallenge-DSI/MainDashboard" target="_blank">
                            <Button className="flex items-center gap-3" style={{ backgroundColor: '#3BBA9C' }}>
                                See More
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Button>
                        </a>

                    </TimelineBody>
                </div>

                <div className="w-full h-full ml-10 mr-10 mt-10">
                    <img
                        className="rounded-xl object-center shadow-xl shadow-blue-gray-900/50"
                        src={process.env.PUBLIC_URL + '/image/tableau_dashboard.png'}
                        alt="Tableau Dashboard"
                    />
                </div>

            </div>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />

            <div className="flex flex-row">
            
                <div>
                    <TimelineHeader>
                    <TimelineIcon className="p-2 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM9.75 17.25a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75Zm2.25-3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-5.25Z" clipRule="evenodd" />
                            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="white" className="font-primary" style={{ color: '#3BBA9C' }}>
                        E-Commerce Analysis Dashboard
                    </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 w-[700px]">
                    <Typography color="white" className="font-primary text-justify mb-5">
                        Conducted a comprehensive and robust analysis of customer purchasing behavior over a year using an extensive 
                        American e-commerce dataset in the form of an interactive dashboard. The analysis aimed to uncover insights into 
                        customers' online buying habits and improve business strategies. Key insights obtained can be seen in the 
                        following:
                        <ul className="list-disc list-inside mt-2">
                            <li>Identified profit distributions based on platforms used, product categories, and payment methods from customer orders.</li>
                            <li>Analyzed sales performance through monthly order trends where the last few quarters provided greater sales than the previous quarters.</li>
                            <li>Found out that most of the customers who frequently ordered are members of the commerce.</li>
                        </ul>
                    </Typography>

                    <a href="https://public.tableau.com/app/profile/vincent.suhardi/viz/Hands-On3SISTECH2024/MainDashboard" target="_blank">
                        <Button className="flex items-center gap-3" style={{ backgroundColor: '#3BBA9C' }}>
                            See More
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </Button>
                    </a>

                    </TimelineBody>
                </div>

                <div className="w-full h-full ml-10 mr-10 mt-20">
                    <img
                        className="rounded-xl object-center shadow-xl shadow-blue-gray-900/50"
                        src={process.env.PUBLIC_URL + '/image/ecommerce-sistech.png'}
                        alt="Tableau Dashboard"
                    />
                </div>

            </div>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />

            <div className="flex flex-row">
                <div>
                    <TimelineHeader>
                    <TimelineIcon className="p-2 z-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M21.721 12.752a9.711 9.711 0 0 0-.945-5.003 12.754 12.754 0 0 1-4.339 2.708 18.991 18.991 0 0 1-.214 4.772 17.165 17.165 0 0 0 5.498-2.477ZM14.634 15.55a17.324 17.324 0 0 0 .332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 0 0 .332 4.647 17.385 17.385 0 0 0 5.268 0ZM9.772 17.119a18.963 18.963 0 0 0 4.456 0A17.182 17.182 0 0 1 12 21.724a17.18 17.18 0 0 1-2.228-4.605ZM7.777 15.23a18.87 18.87 0 0 1-.214-4.774 12.753 12.753 0 0 1-4.34-2.708 9.711 9.711 0 0 0-.944 5.004 17.165 17.165 0 0 0 5.498 2.477ZM21.356 14.752a9.765 9.765 0 0 1-7.478 6.817 18.64 18.64 0 0 0 1.988-4.718 18.627 18.627 0 0 0 5.49-2.098ZM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 0 0 1.988 4.718 9.765 9.765 0 0 1-7.478-6.816ZM13.878 2.43a9.755 9.755 0 0 1 6.116 3.986 11.267 11.267 0 0 1-3.746 2.504 18.63 18.63 0 0 0-2.37-6.49ZM12 2.276a17.152 17.152 0 0 1 2.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0 1 12 2.276ZM10.122 2.43a18.629 18.629 0 0 0-2.37 6.49 11.266 11.266 0 0 1-3.746-2.504 9.754 9.754 0 0 1 6.116-3.985Z" />
                        </svg>
                    </TimelineIcon>
                    <Typography variant="h5" color="white" className="font-primary" style={{ color: '#3BBA9C' }}>
                        Personal Website
                    </Typography>
                    </TimelineHeader>
                    <TimelineBody className="pb-8 w-[700px]">

                        <Typography color="white" className="font-primary text-justify mb-5">
                            This platform, constructed using ReactJS and TailwindCSS for frontend aesthetics serves as a comprehensive showcase. Explore a 
                            curated collection unveiling various projects, organizational experiences, achievements, and 
                            certifications. Designed as a testament to skills and expertise, this website offers a window into 
                            Vincent's professional journey.
                        </Typography>

                    </TimelineBody>
                </div>

                <div className="w-full h-full ml-10 mr-10 mt-2">
                    <img
                        className="rounded-xl object-center shadow-xl shadow-blue-gray-900/50"
                        src={process.env.PUBLIC_URL + '/image/web-showcase.png'}
                        alt="Personal Website"
                    />
                </div>

            </div>
          </TimelineItem>

          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2 z-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.004 10.407c.138.435-.216.842-.672.842h-3.465a.75.75 0 0 1-.65-.375l-1.732-3c-.229-.396-.053-.907.393-1.004a5.252 5.252 0 0 1 6.126 3.537ZM8.12 8.464c.307-.338.838-.235 1.066.16l1.732 3a.75.75 0 0 1 0 .75l-1.732 3c-.229.397-.76.5-1.067.161A5.23 5.23 0 0 1 6.75 12a5.23 5.23 0 0 1 1.37-3.536ZM10.878 17.13c-.447-.098-.623-.608-.394-1.004l1.733-3.002a.75.75 0 0 1 .65-.375h3.465c.457 0 .81.407.672.842a5.252 5.252 0 0 1-6.126 3.539Z" />
                    <path fillRule="evenodd" d="M21 12.75a.75.75 0 1 0 0-1.5h-.783a8.22 8.22 0 0 0-.237-1.357l.734-.267a.75.75 0 1 0-.513-1.41l-.735.268a8.24 8.24 0 0 0-.689-1.192l.6-.503a.75.75 0 1 0-.964-1.149l-.6.504a8.3 8.3 0 0 0-1.054-.885l.391-.678a.75.75 0 1 0-1.299-.75l-.39.676a8.188 8.188 0 0 0-1.295-.47l.136-.77a.75.75 0 0 0-1.477-.26l-.136.77a8.36 8.36 0 0 0-1.377 0l-.136-.77a.75.75 0 1 0-1.477.26l.136.77c-.448.121-.88.28-1.294.47l-.39-.676a.75.75 0 0 0-1.3.75l.392.678a8.29 8.29 0 0 0-1.054.885l-.6-.504a.75.75 0 1 0-.965 1.149l.6.503a8.243 8.243 0 0 0-.689 1.192L3.8 8.216a.75.75 0 1 0-.513 1.41l.735.267a8.222 8.222 0 0 0-.238 1.356h-.783a.75.75 0 0 0 0 1.5h.783c.042.464.122.917.238 1.356l-.735.268a.75.75 0 0 0 .513 1.41l.735-.268c.197.417.428.816.69 1.191l-.6.504a.75.75 0 0 0 .963 1.15l.601-.505c.326.323.679.62 1.054.885l-.392.68a.75.75 0 0 0 1.3.75l.39-.679c.414.192.847.35 1.294.471l-.136.77a.75.75 0 0 0 1.477.261l.137-.772a8.332 8.332 0 0 0 1.376 0l.136.772a.75.75 0 1 0 1.477-.26l-.136-.771a8.19 8.19 0 0 0 1.294-.47l.391.677a.75.75 0 0 0 1.3-.75l-.393-.679a8.29 8.29 0 0 0 1.054-.885l.601.504a.75.75 0 0 0 .964-1.15l-.6-.503c.261-.375.492-.774.69-1.191l.735.267a.75.75 0 1 0 .512-1.41l-.734-.267c.115-.439.195-.892.237-1.356h.784Zm-2.657-3.06a6.744 6.744 0 0 0-1.19-2.053 6.784 6.784 0 0 0-1.82-1.51A6.705 6.705 0 0 0 12 5.25a6.8 6.8 0 0 0-1.225.11 6.7 6.7 0 0 0-2.15.793 6.784 6.784 0 0 0-2.952 3.489.76.76 0 0 1-.036.098A6.74 6.74 0 0 0 5.251 12a6.74 6.74 0 0 0 3.366 5.842l.009.005a6.704 6.704 0 0 0 2.18.798l.022.003a6.792 6.792 0 0 0 2.368-.004 6.704 6.704 0 0 0 2.205-.811 6.785 6.785 0 0 0 1.762-1.484l.009-.01.009-.01a6.743 6.743 0 0 0 1.18-2.066c.253-.707.39-1.469.39-2.263a6.74 6.74 0 0 0-.408-2.309Z" clipRule="evenodd" />
                </svg>
              </TimelineIcon>
              <Typography variant="h5" color="white" className="font-primary bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                More to come . . .
              </Typography>
            </TimelineHeader>
          </TimelineItem>

        </Timeline>
    );
  }