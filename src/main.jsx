import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./scss/index.scss";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <>
      <App />
    </>
  </Provider>
);
