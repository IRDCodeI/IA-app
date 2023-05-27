import { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import File from "./layouts/file";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex min-h-screen min-w-screen flex-col items-center static">
      <div className="w-100 h-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          IA
          </span>
          Application
        </h1>
      </div>
      <div className="w-11/12 mx-10 relative flex py-5 items-center">
        <div className="flex-grow border-t border-white"></div>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="File" />
          <Tab label="Charts" />
          <Tab label="Clustering" />
        </Tabs>
        <div className="flex-grow border-t border-white"></div>
      </div>
      <File></File>
    </div>
  );
}

export default App;
