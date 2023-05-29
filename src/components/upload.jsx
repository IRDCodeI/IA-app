/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import Papa from "papaparse";
import FileContext from "../context/File/FileContext";


export default function UploadFile() {

  const [fileName, setFileName] = useState();
  const {setFile} = useContext(FileContext)

  const handleChange = (file) => {
    if(file){
      const reader = new FileReader();

      reader.onload = function (e) {
        Papa.parse(e.target.result, {
          delimiter: ",",
          header: true,
          complete: (res) => {
            setFile(res)
          }
        })
      };

      reader.readAsText(file);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  };

  return (
    <div className="w-screen flex">
      <div className="w-screen mx-14 flex justify-center items-center">
        <Button
          type="button"
          className="px-5 py-2.5 font-semibold inline-flex items-center justify-center overflow-hidden text-sm text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          variant="contained"
          component="label"
        >
          Upload File
          <input
            className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            type="file"
            name="csvFile"
            accept=".csv"
            onChange={(e) => {
              handleChange(e.target.files[0]);
              setFileName(e.target.files[0].name);
            }}
            style={{ display: "none" }}
          />
        </Button>
        <span className="mx-4 w-64 max-w-lg text-l font-semibold leading-normal text-gray-900 dark:text-white">
          {fileName}
        </span>
      </div>
    </div>
  );
}
