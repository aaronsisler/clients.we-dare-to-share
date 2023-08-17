import "../styles/globals.css";

interface Props {
  children?: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
