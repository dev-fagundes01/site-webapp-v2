import React from "react";
import { render, screen } from "@testing-library/react";
import DesignController from "../../../../../src/pages/design/controller/index.controller";
import * as reactRouterDom from "react-router-dom";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

// ✅ Mock react-router-dom navigate:
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

// ✅ Mock do Header para evitar problemas de i18n
jest.mock("../../../../../src/components/header", () => ({
  __esModule: true,
  default: (props: any) => {
    return React.createElement(
      "header",
      { "data-testid": "header" },
      "Mocked Header"
    );
  },
}));

describe("DesignController", () => {
  it("should render DesignView with header", async () => {
    const mockNavigate = jest.fn();
    (reactRouterDom.useNavigate as jest.Mock).mockReturnValue(mockNavigate);

    const Component = DesignController as React.ComponentType;
    render(React.createElement(Component));

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Mocked Header");
  });
});
