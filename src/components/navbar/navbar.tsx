"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { navMotion } from "../../styles";

const Navbar = () => (
  <motion.nav
    className="relative z-10 px-12 py-10 lg:px-48 lg:pb-12 lg:pt-16"
    variants={navMotion}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
  >
    <div className="flex justify-center lg:justify-between">
      <div className=" font-sans-big-light text-3xl opacity-70">
        <Link href="/">We Dare To Share</Link>
      </div>
      <div className="hidden gap-14 text-lg opacity-70 lg:flex">
        <Link href="/about-us">About Us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/donate">Donate</Link>
      </div>
    </div>
  </motion.nav>
);

export { Navbar };
