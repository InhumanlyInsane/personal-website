import {
    Carousel,
} from "@material-tailwind/react"; 
import { HorizontalCard } from "./HorizontalCard";

export function AwardCarousel() {

  return (

    <Carousel
      className="rounded-xl h-[400px] w-full mb-[90px]"
      loop={true}
      autoplay={true}
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
        imageUrl={process.env.PUBLIC_URL + '/image/bakti-bca.png'}
        orgName="Bank Central Asia (BCA) - University Level"
        heading="Awardee of Bakti BCA Scholarship"
        description="Beasiswa Bakti BCA is a university level scholarship where awardees, other than gaining financial support, are given the chance 
        to hone their leadership skills to real-life use cases, especially in helping support small and medium enterprises (SMES). For 
        this program, we also received seminars and classes that could help in becoming entrepreneurial ready to face the future"
        link={"https://www.bca.co.id/id/tentang-bca/CSR/Bakti-BCA/bakti-pendidikan/beasiswa-bakti-bca"}
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/fit-competition.png'}
        orgName="FIT Data Science Category - International Level"
        heading="1st Place Kaggle & 4th Place Finalist Position"
        description="FIT Competition is an annual technology competition organized by the Faculty of Information Technology, Satya Wacana Christian University. During this competition my team and I successfully secured 
        the finalist position in predicting the happiness score of a country through various factors in the dataset given, plowing 
        through 60 teams from other countries. After that, we secured a winning 4th place in presenting our final solution in English."
        link={"https://www.instagram.com/fitcompetition_2024/"}
      />

      <HorizontalCard
        imageUrl={process.env.PUBLIC_URL + '/image/findit.png'}
        orgName="FindIT! DTETI UGM - National Level"
        heading="5th Place Kaggle & Finalist Position"
        description="Data Analytics Competition is a competition to analyze data, especially big data, to provide solutions to problems 
        that have been provided. In this competition, my team and I were challenged to classify from 1 to 6 times on how many times do 
        customers of a shop need to be given promotions before buying an item. From the preliminary round, we successfully obtained the 
        5th place out of around 200 teams nation-wide."
        link={"https://www.find-it.id/competition/data-analytics"}
      />

    </Carousel>
  );
}