import { configure } from "@testing-library/react";
import { toMatchImageSnapshot } from "jest-image-snapshot";

// Configuração do Testing Library
configure({ testIdAttribute: "data-testid" });

// Estende o expect do Jest com matcher de image snapshot
expect.extend({ toMatchImageSnapshot });

// Configuração global para image snapshots
const customConfig = {
  failureThreshold: 0.05,
  failureThresholdType: "percent" as const,
  customSnapshotsDir: "__image_snapshots__",
  customDiffDir: "__image_snapshots__/__diff_output__",
};

// Função helper para criar configuração de snapshot personalizada
export const imageSnapshotConfig = (customIdentifier: string) => ({
  ...customConfig,
  customSnapshotIdentifier: customIdentifier,
});

// Mock do console para evitar logs desnecessários durante os testes visuais
global.console = {
  ...console,
  log: jest.fn(),
  debug: jest.fn(),
  info: jest.fn(),
  warn: jest.fn(),
};
