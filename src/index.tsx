import React from "react";
import ReactDOM from "react-dom";
import { createServer, Model } from "miragejs";

import GlobalStyles from "./styles/globalStyles";

import App from "./App";

createServer({

  models: {
    transaction: Model
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => this.schema.all("transaction"))

    this.post("/transactions", (schema, request) => {
      let data = JSON.parse(request.requestBody)
      data.createdAt = new Date();
      return schema.create("transaction", data);
    })

  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
