"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navMotion } from "../../styles/motion";

const Navbar = () => (
  <motion.nav className="px-48 pb-12 pt-24" variants={navMotion} initial="hidden" whileInView="show">
    <div className="flex justify-between">
      <div className="font-sans-big-light text-3xl">
        <Link href="/">We Dare To Share</Link>
      </div>
      <div className="flex gap-14 font-sans-small-light text-xl">
        <Link href="/about-us">About Us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/donate">Donate</Link>
      </div>
    </div>
  </motion.nav>
);

export { Navbar };
