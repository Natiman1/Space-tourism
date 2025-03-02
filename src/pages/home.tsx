import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: "easeIn" } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section
      className="home relative flex min-h-dvh w-full flex-col items-center justify-between overflow-hidden text-white lg:flex-row lg:px-28 2xl:justify-evenly"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="mt-28 mb-20 flex max-w-[335px] flex-col items-center md:mt-48 md:mb-40 md:max-w-[450px] lg:mt-[251px] lg:items-start">
        <h5 className="font-subHeading text-primary-500 text-[16px] tracking-[2.7px] uppercase md:text-[20px] lg:text-[28px] lg:tracking-[4.72px]">
          So, you want to travel to
        </h5>
        <span className="font-heading text-[5rem] uppercase md:text-2xl">
          Space
        </span>
        <p className="text-primary-500 font-paragraph lg-text-[18px] text-center text-xs leading-[25px] font-extralight md:leading-[28px] lg:text-start lg:leading-[32px]">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore font-heading text-primary-700 relative z-10 mb-12 flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-white text-[20px] font-light uppercase md:h-[240px] md:w-[240px] md:text-[32px] lg:mt-40 lg:mb-0 lg:h-[274px] lg:w-[274px]">
        <NavLink to="/destination">
          <p>Explore</p>
        </NavLink>
      </div>
    </motion.section>
  );
};

export default Home;
