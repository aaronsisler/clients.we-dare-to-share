import type { Metadata } from "next";

import { HeroSection } from "@/sections/hero-section";

export const metadata: Metadata = {
  title: "We Dare To Share | A 501(c)(3) non-profit organization that conducts humanitarian projects in Zimbabwe",
};

const App = () => (
  <main>
    <HeroSection />
  </main>
);

export default App;
