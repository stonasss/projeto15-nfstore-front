import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./GlobalStyle";
import App from "./App";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>
);
