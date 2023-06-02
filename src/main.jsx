import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import FileState from "./context/File/FileState.jsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileState>
    <App className="App"/>
  </FileState>
);
