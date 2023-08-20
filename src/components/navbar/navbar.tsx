"use client";

import { motion } from "framer-motion";

import { styles } from "../../styles";
import { navVariants } from "../../styles/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} relative py-8`}
  >
    <div className="gradient-01 absolute inset-0 w-[50%]" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="text-[24px] font-extrabold leading-[30.24px] text-white">We Dare To Share</h2>
    </div>
  </motion.nav>
);

export { Navbar };
