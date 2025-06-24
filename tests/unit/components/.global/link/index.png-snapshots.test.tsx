import React from "react";
import { render } from "@testing-library/react";
import Link from "../../../../../src/components/.global/link";
import "@testing-library/jest-dom";
import html2canvas from "html2canvas";
import * as fs from "fs";
import * as path from "path";

describe("Link Component - PNG Snapshots", () => {
  jest.setTimeout(15000);

  // Função helper para gerar PNG
  const generatePNG = async (container: HTMLElement, fileName: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));

    const element = container.firstChild as HTMLElement;
    const canvas = await html2canvas(element, {
      backgroundColor: "#ffffff",
      width: element.offsetWidth + 40,
      height: element.offsetHeight + 40,
      scale: 2,
      logging: false,
      useCORS: true,
    });

    const dataUrl = canvas.toDataURL("image/png");
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");

    const pngDir = path.join(__dirname, "__png_snapshots__");
    if (!fs.existsSync(pngDir)) {
      fs.mkdirSync(pngDir, { recursive: true });
    }

    const filePath = path.join(pngDir, `${fileName}.png`);
    fs.writeFileSync(filePath, imageBuffer);

    console.log(`📸 PNG gerado: ${path.relative(process.cwd(), filePath)}`);
    return filePath;
  };

  test("should render Link and generate PNG snapshot", async () => {
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

    // Gera PNG
    await generatePNG(container, "link-test");

    // Snapshot tradicional
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("should render Link hover state and generate PNG", async () => {
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

    // Simula hover
    const linkElement = container.querySelector("a");
    if (linkElement) {
      linkElement.style.textDecoration = "underline";
    }

    // Gera PNG
    await generatePNG(container, "link-hover");

    // Snapshot tradicional
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("should render multiple Links and generate PNG", async () => {
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

    // Gera PNG
    await generatePNG(container, "link-multiple");

    // Snapshot tradicional
    expect(container.innerHTML).toMatchSnapshot();
  });

  test("should render custom styled Link and generate PNG", async () => {
    const { container } = render(
      <div
        style={{
          padding: "30px",
          backgroundColor: "#e3f2fd",
          display: "inline-block",
          minWidth: "250px",
          borderRadius: "12px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          border: "2px solid #2196f3",
        }}
      >
        <Link onClick={() => {}}>Link Customizado</Link>
      </div>
    );

    // Gera PNG
    await generatePNG(container, "link-custom");

    // Snapshot tradicional
    expect(container.innerHTML).toMatchSnapshot();
  });
});
