import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import FileState from "./context/File/FileState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileState>
    <App />
  </FileState>
);
