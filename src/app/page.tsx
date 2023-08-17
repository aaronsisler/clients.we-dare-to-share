import type { Metadata } from "next";
import { AppBase } from "./app-base";

export const metadata: Metadata = {
  title: "We Dare To Share",
  description: "This is a non-profit website for We Dare To Share.",
};

// Using this App Base given an issue with metadata
// not rendering in testint-library/react since it is a server comp
const Page = () => <AppBase />;

export default Page;
