import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const AppBase = () => (
  <div className="overflow-hidden bg-slate-900">
    <Navbar />
    <div>App Base</div>
    <Footer />
  </div>
);

export { AppBase };
