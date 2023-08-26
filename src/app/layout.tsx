import "../styles/globals.css";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body className="mb-28 flex h-screen flex-col lg:px-24">
      <Navbar />
      {children}
      {/* <Footer /> */}
    </body>
  </html>
);

export default RootLayout;
