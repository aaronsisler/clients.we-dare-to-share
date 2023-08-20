import { render } from "@testing-library/react";
import { PrivacyPolicyPage } from "./page";

describe("Page: Privacy Policy", () => {
  it("renders correctly", async () => {
    render(<PrivacyPolicyPage />);
  });
});
