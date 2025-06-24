import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Link from "../../../../../src/components/.global/link";
import "@testing-library/jest-dom";
import { expectWithPNG } from "../../../../setup/simplePngMatcher";

describe("Link Component", () => {
  // Timeout maior para testes visuais
  jest.setTimeout(15000);

  it("should render correctly and handle click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Link onClick={handleClick}>Test Link</Link>);

    const linkElement = getByText("Test Link");
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
    expect(handleClick).toHaveBeenCalled();
  });

  it("should match the screenshot and generate PNG automatically", async () => {
    const { container } = render(
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          display: "inline-block",
          minWidth: "200px",
          borderRadius: "8px",
        }}
      >
        <Link onClick={() => {}}>Test Link</Link>
      </div>
    );

    // Esta linha automaticamente gera um PNG E faz o snapshot
    await expectWithPNG(container, "link-default-state");
  });

  it("should generate PNG for Link hover state", async () => {
    const { container } = render(
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          display: "inline-block",
          minWidth: "200px",
          borderRadius: "8px",
        }}
      >
        <Link onClick={() => {}}>Hover Link</Link>
      </div>
    );

    // Simula o estado hover
    const linkElement = container.querySelector("a");
    if (linkElement) {
      linkElement.style.textDecoration = "underline";
    }

    // Gera PNG automaticamente
    await expectWithPNG(container, "link-hover-state");
  });

  it("should generate PNG for Link with different text", async () => {
    const { container } = render(
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          display: "inline-block",
          minWidth: "300px",
          borderRadius: "8px",
        }}
      >
        <Link onClick={() => {}}>Este é um link mais longo para teste</Link>
      </div>
    );

    // Gera PNG automaticamente
    await expectWithPNG(container, "link-long-text");
  });

  it("should generate PNG for Link with custom styling", async () => {
    const { container } = render(
      <div
        style={{
          padding: "30px",
          backgroundColor: "#e3f2fd",
          display: "inline-block",
          minWidth: "200px",
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <Link onClick={() => {}}>Link Customizado</Link>
      </div>
    );

    // Gera PNG automaticamente
    await expectWithPNG(container, "link-custom-styling");
  });

  it("should generate PNG for multiple Links", async () => {
    const { container } = render(
      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          minWidth: "400px",
          borderRadius: "8px",
        }}
      >
        <Link onClick={() => {}}>Home</Link>
        <Link onClick={() => {}}>Sobre</Link>
        <Link onClick={() => {}}>Contato</Link>
        <Link onClick={() => {}}>Serviços</Link>
      </div>
    );

    // Gera PNG automaticamente
    await expectWithPNG(container, "link-multiple-links");
  });
  // Teste que usa container.toMatchSnapshot() tradicional + PNG
  it("should use traditional toMatchSnapshot with PNG generation", async () => {
    const { container } = render(
      <div
        style={{
          padding: "25px",
          backgroundColor: "#fff3e0",
          display: "inline-block",
          minWidth: "250px",
          borderRadius: "12px",
          border: "2px solid #ff9800",
        }}
      >
        <Link onClick={() => {}}>Link com Border</Link>
      </div>
    );

    // Gera PNG primeiro
    await expect(container).toMatchPNGSnapshot();

    // Depois faz o snapshot tradicional
    expect(container.innerHTML).toMatchSnapshot();
  });
});
