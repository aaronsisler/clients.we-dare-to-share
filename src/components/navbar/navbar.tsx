"use client";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { navVariants } from "../../styles/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative px-4 py-8`}
  >
    <div className="mx-auto flex justify-between gap-8">
      <h1 className="font-sans-big-regular text-white">We Dare To Share</h1>
    </div>
  </motion.nav>
);

export { Navbar };
