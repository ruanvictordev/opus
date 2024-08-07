import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles.ts";
import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimatePresence>
      <Router>
        <App />
        <GlobalStyles />
      </Router>
    </AnimatePresence>
  </React.StrictMode>
);
