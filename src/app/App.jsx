import TabsBar from "../layouts/Tabsbar";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { AspectRatio } from "@mui/icons-material";
import { ReactSVG } from "react-svg";

const drawerWidth = 220;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default" }}
      >
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
        <div className="w-full h-full flex flex-col items-center">
          <h4 className="text-2xl py-5 font-bold dark:text-white">Models</h4>
          <AspectRatio
            sx={{
              width: 200,
              height: 50,
              bgcolor: "background.level2",
              borderRadius: "md",
            }}
          >
            <ReactSVG src="./openAI.svg" />
          </AspectRatio>
          <AspectRatio
            sx={{
              width: 200,
              bgcolor: "background.level2",
              borderRadius: "md",
            }}
          >
            <ReactSVG src="./googleBard.svg" />
          </AspectRatio>
          <AspectRatio
            sx={{
              width: 200,
              bgcolor: "background.level2",
              borderRadius: "md",
            }}
          >
            <ReactSVG src="./anthropic.svg" />
          </AspectRatio>
        </div>
      </Drawer>
    </Box>
  );
}

export default App;
