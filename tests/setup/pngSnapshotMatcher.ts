import html2canvas from "html2canvas";
import * as fs from "fs";
import * as path from "path";

// Função utilitária para gerar PNG automaticamente
const generatePNGSnapshot = async (
  container: HTMLElement,
  testName: string,
  testPath: string
): Promise<void> => {
  try {
    // Aguarda renderização
    await new Promise(resolve => setTimeout(resolve, 300));

    // Pega o primeiro elemento filho (o wrapper do componente)
    const element = container.firstChild as HTMLElement;
    if (!element) {
      console.warn("⚠️  Nenhum elemento encontrado no container");
      return;
    }

    // Captura como PNG
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

    // Determina onde salvar
    const testDir = path.dirname(testPath);
    const pngDir = path.join(testDir, "__png_snapshots__");

    if (!fs.existsSync(pngDir)) {
      fs.mkdirSync(pngDir, { recursive: true });
    }

    const fileName = `${testName.replace(/\s+/g, "-").toLowerCase()}.png`;
    const filePath = path.join(pngDir, fileName);

    fs.writeFileSync(filePath, imageBuffer);
    console.log(
      `📸 PNG snapshot salvo: ${path.relative(process.cwd(), filePath)}`
    );
  } catch (error) {
    console.error("❌ Erro ao gerar PNG snapshot:", error);
  }
};

// Função helper para usar nos testes
export const expectWithPNG = async (
  container: HTMLElement,
  testName?: string
) => {
  // Obtém informações do teste atual
  const testPath = expect.getState().testPath || __filename;
  const currentTestName =
    testName || expect.getState().currentTestName || "unknown-test";

  // Gera o PNG
  await generatePNGSnapshot(container, currentTestName, testPath);

  // Retorna o snapshot tradicional
  return expect(container.innerHTML).toMatchSnapshot();
};

// Adiciona função global para usar nos testes
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchPNGSnapshot(): Promise<R>;
    }
  }
}

// Matcher personalizado
const toMatchPNGSnapshot = async function (
  this: jest.MatcherContext,
  received: any
): Promise<jest.CustomMatcherResult> {
  const testPath = this.testPath || "";
  const currentTestName = this.currentTestName || "unknown-test";

  if (received && received.nodeType === Node.ELEMENT_NODE) {
    await generatePNGSnapshot(received, currentTestName, testPath);

    return {
      pass: true,
      message: () => `PNG snapshot generated for ${currentTestName}`,
    };
  }

  return {
    pass: false,
    message: () => "Expected a DOM element for PNG snapshot",
  };
};

// Estende Jest com o matcher
expect.extend({
  toMatchPNGSnapshot,
});

export { generatePNGSnapshot };
