import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProviderContext } from "./context/Auth/authContext";
import { ProviderProducts } from "./context/products/products";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProviderContext>
        <ProviderProducts>
          <App />
        </ProviderProducts>
      </ProviderContext>
    </BrowserRouter>
  </React.StrictMode>
);
