import { render } from "@testing-library/react";
import { AppBase } from "./app-base";

describe("App: App Base", () => {
  it("renders correctly", async () => {
    render(<AppBase />);
  });
});