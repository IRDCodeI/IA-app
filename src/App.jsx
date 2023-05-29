/* eslint-disable react/prop-types */
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import File from "./layouts/file";
import Box from "@mui/material/Box";
import Charts from "./layouts/charts";

function TabPanel(props) {

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="flex flex-col items-center static">
      <div className="w-100 h-auto">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            IA
          </span>
          Application
        </h1>
      </div>
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-white"></div>
        <Box sx={{ width: "100vw" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} centered>
              <Tab label="File" {...a11yProps(0)} />
              <Tab label="Charts" {...a11yProps(1)} />
              <Tab label="Clustering" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
           <File></File>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Charts></Charts>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
        <div className="flex-grow border-t border-white"></div>
      </div>
    </div>
  );
}

export default App;
