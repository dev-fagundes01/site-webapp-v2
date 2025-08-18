import puppeteer, { Browser } from "puppeteer";
import * as fs from "fs";
import * as path from "path";

// Cache do browser para otimizar performance
let browserInstance: Browser | null = null;

const getBrowser = async (): Promise<Browser> => {
  if (!browserInstance) {
    browserInstance = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }
  return browserInstance;
};

// Função para gerar PNG usando Puppeteer
const generatePNGWithPuppeteer = async (
  containerHTML: string,
  testName: string,
  testPath: string
): Promise<void> => {
  try {
    const browser = await getBrowser();
    const page = await browser.newPage();

    // HTML completo para renderizar o componente
    const fullHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Test PNG Snapshot</title>
          <style>
            body {
              margin: 0;
              padding: 20px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              background-color: #fff;
            }
            
            /* Estilos básicos do Link component */
            a {
              color: #1976d2;
              text-decoration: none;
              cursor: pointer;
              font-size: 16px;
              transition: all 0.3s ease;
            }
            
            a:active {
              color: #0D47A1;
            }
            
            a:focus {
              outline: 2px solid #1976d2;
              outline-offset: 2px;
            }
          </style>
        </head>
        <body>
          <div id="test-container">
            ${containerHTML}
          </div>
        </body>
      </html>
    `;
    await page.setContent(fullHTML);
    await new Promise(resolve => setTimeout(resolve, 300)); // Aguarda renderização

    // Determina onde salvar
    const testDir = path.dirname(testPath);
    const pngDir = path.join(testDir, "__png_snapshots__");

    if (!fs.existsSync(pngDir)) {
      fs.mkdirSync(pngDir, { recursive: true });
    }

    const fileName = `${testName.replace(/\s+/g, "-").toLowerCase()}.png`;
    const filePath = path.join(pngDir, fileName) as `${string}.png`;

    // Faz o screenshot do container
    const containerElement = await page.$("#test-container");
    if (containerElement) {
      await containerElement.screenshot({
        path: filePath,
        type: "png",
        omitBackground: false,
      });

      console.log(
        `📸 PNG snapshot salvo: ${path.relative(process.cwd(), filePath)}`
      );
    } else {
      console.warn("⚠️  Container não encontrado para screenshot");
    }

    await page.close();
  } catch (error) {
    console.error("❌ Erro ao gerar PNG snapshot com Puppeteer:", error);
  }
};

// Função helper para usar nos testes
export const expectWithPNG = async (
  container: HTMLElement,
  testName?: string
) => {
  // Obtém informações do teste atual
  const testPath =
    (global as any).__filename || expect.getState().testPath || __filename;
  const currentTestName =
    testName || expect.getState().currentTestName || "unknown-test";

  // Gera o PNG usando Puppeteer
  await generatePNGWithPuppeteer(
    container.innerHTML,
    currentTestName,
    testPath
  );

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

// Matcher personalizado usando Puppeteer
const toMatchPNGSnapshot = async function (
  this: jest.MatcherContext,
  received: any
): Promise<jest.CustomMatcherResult> {
  const testPath = this.testPath || "";
  const currentTestName = this.currentTestName || "unknown-test";

  if (received && received.nodeType === Node.ELEMENT_NODE) {
    await generatePNGWithPuppeteer(
      received.innerHTML,
      currentTestName,
      testPath
    );

    return {
      pass: true,
      message: () =>
        `PNG snapshot gerado com Puppeteer para ${currentTestName}`,
    };
  }

  return {
    pass: false,
    message: () => "Esperado um elemento DOM para PNG snapshot",
  };
};

// Estende Jest com o matcher
expect.extend({
  toMatchPNGSnapshot,
});

// Cleanup do browser quando os testes terminarem
if (typeof afterAll !== "undefined") {
  afterAll(async () => {
    if (browserInstance) {
      await browserInstance.close();
      browserInstance = null;
    }
  });
}

export { generatePNGWithPuppeteer };
