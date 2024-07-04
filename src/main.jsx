import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { ThemeProvider } from "@material-tailwind/react";
import { AppStore } from "./app/mainstore.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={AppStore}>
      <App />
    </Provider>
  </ThemeProvider>
);
