import {
    Carousel,
} from "@material-tailwind/react"; 
import { HorizontalCard } from "./HorizontalCard";

export function CarouselCard() {

  return (

    <Carousel
      className="rounded-xl h-[400px] w-full mb-[90px]"
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
        imageUrl={process.env.PUBLIC_URL + '/image/aic.png'}
        orgName="AIC COMPFEST 15"
        heading="Staff of Events & MC"
        description="The AI Innovation Challenge (AIC) is a competition held by BEM Fasilkom UI that is centered around 
        utilizing Machine Learning or Deep Learning to develop innovations aligned with the specified theme. Here, I 
        facilitated e-health AI speaker presentations, managed event logistics and MC scripts, and supervised mentors 
        to ensure a smooth competition experience."
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
      />

    </Carousel>
  );
}