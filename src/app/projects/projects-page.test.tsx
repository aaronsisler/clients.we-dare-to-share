import { render } from "@testing-library/react";
import ProjectsPage from "./page";

describe("Page: Projects", () => {
  it("renders correctly", async () => {
    render(<ProjectsPage />);
  });
});
