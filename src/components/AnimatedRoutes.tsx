import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "../Layout";
import Home from "../pages/home";
import Crew from "../pages/crew";
import Destination from "../pages/destination";
import Technology from "../pages/technology";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation()
    return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/technology" element={<Technology />} />
          </Route>
        </Routes>
      </AnimatePresence>
    );
};

export default AnimatedRoutes;
