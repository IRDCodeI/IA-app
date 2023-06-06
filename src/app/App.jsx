import TabsBar from "../layouts/Tabsbar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import AIContext from "../context/AI/IAContext";
import { useContext } from "react";

const drawerWidth = 220;

function App() {

  const {setModel} = useContext(AIContext)

  const handleClick = (e) =>{
    setModel(e.target.value)
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default" }}>
        <div className="flex flex-col items-center">
          <div className="w-100 h-auto mb-10">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="me-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                IA
              </span>
              pplication
            </h1>
          </div>
          <TabsBar />
        </div>
      </Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderLeft: "0px solid #fff",
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <div className="w-full h-full my-10 flex flex-col items-center">
          <h4 className="text-2xl py-5 font-bold dark:text-white">Models</h4>
          <div className="flex flex-col space-y-8 items-center">
            <button
              type="button"
              value="chatgpt"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={handleClick}
            >
              <img
                className="rounded-full shadow-xl dark:shadow-gray-800"
                src="/icons/openAI.png"
                width={35}
              ></img>
            </button>
            <button
              type="button"
              value="bard"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              onClick={handleClick}
            >
              <img
                className="rounded-full shadow-xl dark:shadow-gray-80"
                src="/icons/gBard.png"
                width={75}
              ></img>
            </button>
            <button
              hidden
              type="button"
              value="claude"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <img
                className="rounded-full shadow-xl dark:shadow-gray-80"
                src="/icons/antropic.png"
                width={35}
              ></img>
            </button>
          </div>
        </div>
      </Drawer>
    </Box>
  );
}

export default App;
