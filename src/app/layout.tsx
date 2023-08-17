import type { Metadata } from "next";

import "..styles/global.css";

export const metadata: Metadata = {
  title: "we Dare To Share",
  description: "This is a non-profit website for We Dare To Share.",
};

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
