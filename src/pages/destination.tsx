import { useState } from "react";
import { destinations } from "../data.json";
import clsx from "clsx";
import { motion } from "framer-motion";

const Destination = () => {
  const [planets] = useState(destinations);
  const [activePlanet, setActivePlanet] = useState(0);

  const { name, description, images, distance, travel } = planets[activePlanet];

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="destination relative min-h-dvh w-full overflow-hidden text-white"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="font-subHeading pt-[88px] pb-8 text-center text-[16px] font-extralight tracking-[2.7px] text-white uppercase md:pt-[136px] md:pl-10 md:text-start md:text-[20px] md:tracking-[3.4px] lg:pt-[200px] lg:pb-16">
        <span className="text-primary-600 pr-4 font-bold md:ml-0">01</span> Pick
        your destination
      </h1>

      <div className="mx-6 flex flex-col items-center lg:flex-row lg:justify-evenly">
        <article className="mb-6 h-44 w-44 md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px]">
          <img src={images.png} alt={name} />
        </article>
        <article className="flex flex-col items-center lg:items-start">
          <div className="mb-5 flex gap-6 md:mb-8">
            {planets.map((planet, index) => (
              <button
                key={index}
                onClick={() => setActivePlanet(index)}
                className={clsx(
                  "font-subHeading text-2xs text-primary-500 border-b-3 pb-2 tracking-[2.3px] uppercase duration-200 ease-in-out hover:border-b-[#979797] md:pb-3.5 md:text-xs",
                  index === activePlanet
                    ? "border-white text-white"
                    : "border-transparent",
                )}
              >
                {planet.name}
              </button>
            ))}
          </div>

          <h2 className="text-l font-heading uppercase md:text-[80px]">
            {name}
          </h2>
          <p className="font-paragraph text-primary-500 w-[327px] text-center text-[15px] leading-[25px] font-extralight max-[350px]:w-[280px] md:w-[573px] md:leading-[28px] lg:w-[444px] lg:text-start">
            {description}
          </p>
          <div className="my-8 h-[1px] w-[327px] bg-[#979797] md:my-12 md:w-[573px] lg:w-[444px]"></div>
          <div className="mb-14 flex flex-col items-center gap-8 md:mb-16 md:flex-row md:gap-14 lg:mb-24">
            <h3 className="text-2xs text-primary-500 font-subHeading flex flex-col items-center tracking-[2.3px] uppercase md:items-start">
              Avg. Distance
              <span className="font-heading text-3xl text-white">
                {distance}
              </span>
            </h3>
            <h3 className="text-2xs text-primary-500 font-subHeading flex flex-col items-center tracking-[2.3px] uppercase">
              Est. Travel Time
              <span className="font-heading text-3xl text-white">{travel}</span>
            </h3>
          </div>
        </article>
      </div>
    </motion.section>
  );
};

export default Destination;
