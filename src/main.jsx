import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import FileState from "./context/File/FileState.jsx";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
import 'primeicons/primeicons.css';
import AIState from "./context/AI/IAState.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <FileState>
    <AIState>
      <App className="App"/>
    </AIState>
  </FileState>
);
