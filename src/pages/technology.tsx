import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { technology } from "../data.json";
import clsx from "clsx";
import { motion } from "framer-motion";

const Technology = () => {
  const [spaceSheeps] = useState(technology);
  const [currentSpaceSheep, setCurrentSpaceSheep] = useState(0);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const { name, images, description } = spaceSheeps[currentSpaceSheep];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="technology relative min-h-dvh w-full overflow-hidden text-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="font-subHeading pt-[88px] pb-8 text-center text-[16px] font-extralight tracking-[2.7px] text-white uppercase md:pt-[136px] md:pb-15 md:pl-10 md:text-start md:text-[20px] md:tracking-[3.4px] lg:pt-[200px] lg:pb-16 lg:pl-28">
        <span className="text-primary-600 pr-4 font-bold md:ml-0">03</span>
        Space Sheep Technology
      </h1>
      <div className="flex flex-col items-center gap-9 md:gap-14 lg:flex-row-reverse lg:justify-between lg:gap-0">
        <article className="lg:mb-20">
          <img
            src={isTabletOrMobile ? images.landscape : images.portrait}
            alt={name}
            className="h-[170px] w-screen md:h-[310px] lg:h-[527px] lg:w-[515px]"
          />
        </article>
        <article className="flex flex-col-reverse items-center gap-6 md:gap-11 lg:flex-row-reverse lg:pl-20">
          <div className="flex flex-col items-center lg:mr-5 lg:items-start">
            <p className="font-subHeading text-2xs text-primary-500 tracking-[2.3px] uppercase">
              THE TERMINOLOGY…
            </p>
            <h2 className="font-heading mb-4 text-[24px] uppercase md:mt-4 md:text-[40px] lg:mt-0 lg:text-[56px]">
              {name}
            </h2>
            <p className="font-paragraph text-primary-500 w-[327px] pb-20 text-center text-[15px] leading-[25px] font-extralight max-[350px]:w-[280px] md:w-[458px] md:leading-[28px] lg:w-[444px] lg:pb-0 lg:text-start lg:text-[18px] lg:leading-[32px]">
              {description}
            </p>
          </div>
          <div className="flex gap-4 lg:flex-col lg:justify-center lg:gap-8">
            {spaceSheeps.map((_spaceSheep, index) => (
              <button
                key={index}
                onClick={() => setCurrentSpaceSheep(index)}
                className={clsx(
                  "h-10 w-10 cursor-pointer rounded-full border border-[#979797] transition-all duration-300 hover:border-white md:h-15 md:w-15 lg:h-20 lg:w-20",
                  index === currentSpaceSheep
                    ? "text-primary-700 bg-white"
                    : "text-white",
                )}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default Technology;
