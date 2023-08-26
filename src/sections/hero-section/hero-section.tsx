import Image from "next/image";
import Link from "next/link";

import { landingHeroImage } from "@/content/images";
import { styles } from "@/styles";

const HeroSection = () => (
  <section className="relative flex h-[500px] overflow-hidden px-12">
    <Image
      alt={landingHeroImage.alt}
      src={landingHeroImage.src}
      fill
      priority
      className="-z-10 mt-16 h-full w-screen scale-[1.25] object-none object-center brightness-50 lg:mt-20 lg:scale-[2]"
    />
    <div className="flex flex-col justify-center">
      <div className="flex items-center pb-12 pt-12 text-5xl text-white">Changing lives with clean water</div>
      <div className="flex items-center text-2xl text-white">Changing lives with clean water</div>

      <Link
        className={`${styles.ctaButton} mx-12 mt-10 flex w-fit rounded px-5 py-1 text-2xl no-underline hover:no-underline`}
        href="/donate"
      >
        <div>Donate</div>
      </Link>
    </div>
  </section>
);

export { HeroSection };
