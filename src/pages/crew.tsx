import { useState } from "react";
import { crew } from "../data.json";
import clsx from "clsx";
import { motion } from "framer-motion";

const Crew = () => {
  const [people] = useState(crew);
  const [currentCrew, setCurrentCrew] = useState(0);

  const { name, images, role, bio } = people[currentCrew];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  return (
    <motion.section
      className="crew relative min-h-dvh w-full overflow-hidden text-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="font-subHeading pt-[88px] pb-8 text-center text-[16px] font-extralight tracking-[2.7px] text-white uppercase md:pt-[136px] md:pl-10 md:text-start md:text-[20px] md:tracking-[3.4px] lg:pt-[200px] lg:pb-16 lg:pl-28">
        <span className="text-primary-600 pr-4 font-bold md:ml-0">02</span> Meet
        your crew
      </h1>
      <div className="flex flex-col items-center justify-between md:flex-col-reverse lg:flex-row-reverse lg:justify-evenly lg:gap-20">
        <article className="mb-8 flex flex-col items-center md:mb-0">
          <img
            src={images.png}
            alt={name}
            className="h-[222px] w-auto text-center md:h-[572px]"
          />
          <div className="h-[1px] w-[327px] bg-[#383b4b] text-center md:hidden"></div>
        </article>
        <article className="mx-6 flex w-[327px] flex-col-reverse items-center md:flex-col lg:mt-30 lg:w-[488px] lg:items-start">
          <div className="mt-8 mb-24 flex flex-col items-center md:mb-10 lg:mb-20 lg:items-start">
            <h3 className="font-heading text-primary-500 text-xs uppercase md:text-[24px] lg:text-[32px]">
              {role}
            </h3>
            <h2 className="font-heading :text-[40px] mb-4 text-[24px] uppercase md:text-[40px] lg:text-[56px]">
              {name}
            </h2>
            <p className="font-paragraph text-primary-500 w-[327px] text-center text-[15px] leading-[25px] font-extralight max-[350px]:w-[280px] md:w-[458px] md:leading-[28px] lg:w-[444px] lg:text-start lg:text-[18px] lg:leading-[32px]">
              {bio}
            </p>
          </div>

          <div className="flex gap-4 md:mb-10">
            {people.map((person, index) => (
              <button
                key={index}
                onClick={() => setCurrentCrew(index)}
                className={clsx(
                  "h-2.5 w-2.5 cursor-pointer rounded-full bg-[#ffffff4d] hover:bg-[#979797]",
                  index === currentCrew ? "bg-white" : "",
                )}
              ></button>
            ))}
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default Crew;
