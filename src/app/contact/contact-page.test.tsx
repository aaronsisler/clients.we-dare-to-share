import { render } from "@testing-library/react";
import { ContactPage } from "./page";

describe("Page: Contact", () => {
  it("renders correctly", async () => {
    render(<ContactPage />);
  });
});
