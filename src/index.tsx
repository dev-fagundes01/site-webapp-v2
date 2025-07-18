import "./i18n/i18n";
import "./styles/accessibility.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {GlobalStyles} from './styles/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles/>
  </React.StrictMode>
);
