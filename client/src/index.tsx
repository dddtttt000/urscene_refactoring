import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Store from "./contexts/Store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Store>
        <App />
      </Store>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root"),
);
