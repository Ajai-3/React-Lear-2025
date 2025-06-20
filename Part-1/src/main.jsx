import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/Context.jsx";
import ErrorBoundary from "./components/ErrorBoundry.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ContextProvider>
  </BrowserRouter>
);
