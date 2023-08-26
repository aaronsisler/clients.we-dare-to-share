import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

import { FACEBOOK_URL } from "../../config";
import { logo } from "@/content/images";
import { square } from "@/styles";

const Footer = () => (
  <footer className="bg-slate-200 px-24 pb-12 pt-2 text-gray-600">
    <div className="flex justify-between py-6">
      <div className="flex gap-8 text-lg">
        <Link href="/about-us">About Us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact-us">Contact Us</Link>
        <Link href="/donate">Donate</Link>
      </div>
      <div className="flex w-1/4 justify-center">
        <SocialIcon network="facebook" url={FACEBOOK_URL} />
      </div>
    </div>
    <div className="flex justify-between">
      <div className="flex gap-6">
        <div className={`relative ${square(24)}`}>
          <Image alt={logo.alt} src={logo.src} fill />
        </div>
        <div className="flex items-center text-3xl">We Dare To Share</div>
      </div>
      <div className="flex items-center">
        &copy;2023 We Dare To Share
        <br />
        501(c)(3) non-profit organization
      </div>
    </div>
  </footer>
);

export { Footer };
