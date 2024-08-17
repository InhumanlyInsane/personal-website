import {
    Carousel,
    IconButton
} from "@material-tailwind/react"; 
import { HorizontalCard } from "./HorizontalCard";
import { Icon } from "@iconify/react/dist/iconify.js";

export function OrgCarousel() {

  return (

    <Carousel
      className="rounded-xl cs:h-[400px] cs:w-full xs:h-[610px] mb-16 cs:mx-0 xs:mx-4"
      loop={true}
      autoplay={true}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 xs:left-0 cs:left-4 -translate-y-2/4 rounded-3xl"
        >
          <Icon icon="mdi:keyboard-arrow-left" style={{ fontSize: '50px' }}/>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 xs:right-0 cs:right-4 -translate-y-2/4 rounded-3xl"
        >
          <Icon icon="mdi:keyboard-arrow-right" style={{ fontSize: '50px' }}/>
        </IconButton>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span 
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/ristek-pic.png'}
        orgName="RISTEK Fasilkom UI"
        heading="Member of Data Science & Analytics SIG"
        description="RISTEK is an independent organization operated by the students of the Faculty of Computer Science Universitas 
        Indonesia that aims to cultivate students’ interests in the fields of science and technology. RISTEK's Data Science & Analytics 
        SIG aims to accommodate students interested in Data Science & Analytics. Data Science & Analytics will focus more on the practical 
        side of data science, readily applicable to various data science-related tasks."
        link={"https://www.ristek.cs.ui.ac.id/"}
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/aic.png'}
        orgName="AIC COMPFEST 16"
        heading="Person in Charge (PIC) & Ex-Staff"
        description="The AI Innovation Challenge (AIC) is a competition held by BEM Fasilkom UI that is centered around 
        utilizing Machine Learning or Deep Learning to develop innovations aligned with the specified theme. Here, I 
        facilitated e-health AI speaker presentations, managed event logistics and MC scripts, and supervised mentors 
        to ensure a smooth competition experience."
        link={"https://compfest.id/competition/aic"}
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/desbin.png'}
        orgName="Desa Binaan KMBUI 2023"
        heading="Staff of Documentation & MC"
        description="
        At Desa Binaan, I enhanced the initiative's online presence through captivating Instagram posts, documented 
        significant moments with precision, and led as the Master of Ceremony during the peak event. Desa Binaan uplifts 
        Dusun Krecek village, fostering community bonds and supporting the local economy through the promotion of 
        exceptional coffee."
        link={"https://www.instagram.com/desabinaan.kmbui/"}
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/ppmb1.JPG'}
        orgName="PPMB KMBUI 2023"
        heading="Staff of Events & MC"
        description="
        At PPMB, a non-funded event by KMBUI for newcoming UI students, I served as MC, 
        skillfully engaging students during their orientation. Additionally, I demonstrated proficient event management 
        by coordinating and executing a trilogy of events seamlessly, catering to both online and offline platforms. 
        PPMB aims to guide and support new students, ensuring a smooth integration into the institution for a fulfilling 
        college experience."
        link={"https://www.instagram.com/ppmb.kmbui/"}
      />

    </Carousel>
  );
}