import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FileState from "./context/File/FileState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileState>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FileState>
);
