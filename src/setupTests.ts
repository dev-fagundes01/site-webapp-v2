// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import { toMatchImageSnapshot } from "jest-image-snapshot";
// Adicionando polyfill para TextEncoder e TextDecoder usando text-encoding
import { TextEncoder, TextDecoder } from "text-encoding";

// Importa nossos matchers customizados para PNG snapshots
import "../tests/setup/simplePngMatcher";

// Configurando o i18next para testes
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Mantém o matcher original também disponível
expect.extend({ toMatchImageSnapshot });

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

i18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "pt",
  resources: {
    pt: {
      translation: {
        "Logo Sou Junior": "Logo Sou Junior",
        "Sobre nós": "Sobre nós",
        "Nossas iniciativas": "Nossas iniciativas",
        "links.aboutUs": "Sobre nós",
        "links.initiatives": "Nossas iniciativas",
      },
    },
  },
});
