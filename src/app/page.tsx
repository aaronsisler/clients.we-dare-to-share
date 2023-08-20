import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "We Dare To Share",
  description: "This is a non-profit website for We Dare To Share.",
};

const App = () => (
  <div className="overflow-hidden bg-slate-900">
    <Navbar />
    <div>App Base</div>
    <Footer />
  </div>
);

export default App;
