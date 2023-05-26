"use client";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Papa from "papaparse";

export default function UploadFile({ dataFields }) {
  const [fileName, setFileName] = useState();
  const [file, setFile] = useState();

  useEffect(() => {
    if(file){
      const reader = new FileReader();

      reader.onload = function (e) {
        Papa.parse(e.target.result, {
          delimiter: ",",
          header: true,
          complete: (res) => {
            dataFields(res.meta.fields)
          }
        })
      };

      reader.readAsText(file);
    }
  }, [dataFields, file]);

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
              setFile(e.target.files[0]);
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
