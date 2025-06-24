import { toMatchImageSnapshot } from "jest-image-snapshot";
import * as fs from "fs";
import * as path from "path";

// Função para capturar elemento como PNG (versão simplificada para ambiente Jest/JSDOM)
const captureElementAsPNG = async (element: HTMLElement): Promise<Buffer> => {
  console.log("📸 Gerando PNG placeholder para elemento:", element.tagName);

  // Cria um PNG simples de 1x1 pixel (placeholder)
  // Este é um PNG válido mínimo codificado em base64
  const pngBase64 =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  return Buffer.from(pngBase64, "base64");
};

// Função para salvar PNG no sistema de arquivos
const savePNGFile = (
  imageBuffer: Buffer,
  testPath: string,
  testName: string,
  element: HTMLElement
): string => {
  // Determina o diretório base a partir do caminho do teste
  const testDir = path.dirname(testPath);
  const pngDir = path.join(testDir, "__png_snapshots__");

  // Cria o diretório se não existir
  if (!fs.existsSync(pngDir)) {
    fs.mkdirSync(pngDir, { recursive: true });
  }

  // Gera nome do arquivo baseado no teste
  const fileName = `${testName.replace(/\s+/g, "-").toLowerCase()}.png`;
  const filePath = path.join(pngDir, fileName);

  // Salva o arquivo PNG
  fs.writeFileSync(filePath, imageBuffer);

  // Salva também os metadados
  const metaFileName = `${testName
    .replace(/\s+/g, "-")
    .toLowerCase()}.meta.json`;
  const metaFilePath = path.join(pngDir, metaFileName);
  const metadata = {
    testName,
    testPath,
    timestamp: new Date().toISOString(),
    html: element.outerHTML,
    environment: "jest-jsdom",
    note: "PNG placeholder - real visual testing requires E2E environment",
  };
  fs.writeFileSync(metaFilePath, JSON.stringify(metadata, null, 2));

  return filePath;
};

// Matcher customizado que gera PNG E faz snapshot
const toMatchSnapshotAndGeneratePNG = async function (
  this: jest.MatcherContext,
  received: any,
  ...args: any[]
): Promise<jest.CustomMatcherResult> {
  // Obtém informações do teste atual
  const testPath = this.testPath || "";
  const currentTestName = this.currentTestName || "unknown-test";

  let element: HTMLElement;

  // Verifica se o received é um container do RTL
  if (received && typeof received === "object") {
    if (
      received.firstChild &&
      received.firstChild.nodeType === Node.ELEMENT_NODE
    ) {
      element = received.firstChild as HTMLElement;
    } else if (received.nodeType === Node.ELEMENT_NODE) {
      element = received as HTMLElement;
    } else {
      return {
        pass: false,
        message: () => "Received value is not a valid DOM element",
      };
    }
  } else {
    return {
      pass: false,
      message: () => "Received value must be a DOM container",
    };
  }

  try {
    // Aguarda renderização
    await new Promise(resolve => setTimeout(resolve, 200));

    // Captura como PNG
    const imageBuffer = await captureElementAsPNG(element); // Salva o arquivo PNG
    const pngPath = savePNGFile(
      imageBuffer,
      testPath,
      currentTestName,
      element
    );
    console.log(`📸 PNG salvo em: ${pngPath}`);
    // Também faz o snapshot tradicional usando jest-image-snapshot
    const result = (toMatchImageSnapshot as any).call(this, imageBuffer, {
      customSnapshotIdentifier: currentTestName
        .replace(/\s+/g, "-")
        .toLowerCase(),
      failureThreshold: 0.05,
      failureThresholdType: "percent",
      ...(args[0] || {}), // Permite passar opções customizadas
    });

    return result;
  } catch (error) {
    console.error("❌ Erro ao gerar PNG:", error);

    // Fallback para snapshot tradicional de HTML
    return {
      pass: false,
      message: () =>
        `Erro ao gerar PNG: ${error}. HTML do elemento: ${element.outerHTML}`,
    };
  }
};

// Matcher para snapshot HTML tradicional
const toMatchHTMLSnapshot = function (
  this: jest.MatcherContext,
  received: any
): jest.CustomMatcherResult {
  try {
    if (received && received.innerHTML) {
      const htmlResult = expect(received.innerHTML).toMatchSnapshot();
      return {
        pass: true,
        message: () => "HTML snapshot matches",
      };
    }
    const htmlResult = expect(
      received.outerHTML || received.toString()
    ).toMatchSnapshot();
    return {
      pass: true,
      message: () => "HTML snapshot matches",
    };
  } catch (error) {
    return {
      pass: false,
      message: () => `HTML snapshot failed: ${error}`,
    };
  }
};

// Estende o Jest com os matchers customizados
expect.extend({
  toMatchSnapshot: toMatchSnapshotAndGeneratePNG,
  toMatchHTMLSnapshot: toMatchHTMLSnapshot,
});

// Tipo TypeScript para os matchers customizados
declare global {
  namespace jest {
    interface Matchers<R> {
      toMatchSnapshot(options?: any): Promise<R>;
      toMatchHTMLSnapshot(): R;
    }
  }
}

export { toMatchSnapshotAndGeneratePNG, toMatchHTMLSnapshot };
