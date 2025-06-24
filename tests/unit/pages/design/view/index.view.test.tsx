import React from "react";
import { render } from "@testing-library/react";
import DesignPage from "../../../../../src/pages/design/view/index.view";

describe("Design Page View", () => {
  it("should render header correctly", () => {
    const links = [
      { label: "aboutUs", path: "/about-us", onClick: jest.fn() },
      { label: "initiatives", path: "/initiatives", onClick: jest.fn() },
    ];

    const { getByAltText } = render(<DesignPage links={links} />);

    expect(getByAltText("Sou Junior Logo")).toBeInTheDocument();
  });

  it("should match snapshot", () => {
    const links = [
      { label: "aboutUs", onClick: jest.fn() },
      { label: "initiatives", onClick: jest.fn() },
    ];

    const { container } = render(<DesignPage links={links} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
