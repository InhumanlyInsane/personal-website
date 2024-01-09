import {
    Carousel,
} from "@material-tailwind/react"; 
import { HorizontalCard } from "./HorizontalCard";

export function CarouselCard({cardCount}) {

  // const cards = Array.from({ length: cardCount }, (_, index) => (
  //   <HorizontalCard key={index} />
  // ));

  return (

    <Carousel
      className="rounded-xl h-[400px] w-full mb-[90px]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
        imageUrl={process.env.PUBLIC_URL + '/aic.png'}
        orgName="AIC COMPFEST 15"
        heading="Staff of Events & MC"
        description="The AI Innovation Challenge (AIC) is a competition held by BEM Fasilkom UI that is centered around 
        utilizing Machine Learning or Deep Learning to develop innovations aligned with the specified theme. Here, I 
        facilitated e-health AI speaker presentations, managed event logistics and MC scripts, and supervised mentors 
        to ensure a smooth competition experience."
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/desbin.png'}
        orgName="Desa Binaan KMBUI 2023"
        heading="Staff of Documentation & MC"
        description="
        Desa Binaan, a university-led initiative, uplifts Dusun Krecek village by fostering familial bonds, promoting 
        social \cohesion, and supporting the local economy through activities and marketing of their exceptional coffee."
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/ppmb1.JPG'}
        orgName="PPMB KMBUI 2023"
        heading="Staff of Events & MC"
        description="Your description text here."
      />

    </Carousel>
  );
}