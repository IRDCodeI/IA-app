import UploadFile from "../components/upload";
import FileContext from "../context/File/FileContext";
import TableFile from "./table";
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useContext, useState } from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function DataFields() {
  const { file } = useContext(FileContext);
  const [fields, setFields] = useState();

  useEffect(() => {
    if(file){
      setFields(file.meta.fields);
    }
  }, [file]);

  return (
    <>
      <UploadFile></UploadFile>
      <div className="w-11/12 mx-10 relative flex flex-col py-5 items-center">
        <span
          className="flex-shrink mx-4 my-5 text-xl font-semibold text-gray-400"
          hidden
        >
          Dataset Information
        </span>
        <h4 className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
          Fields
        </h4>
        <div className="grid grid-cols-6 gap-4">
          {fields &&
            fields.map((fieldDS) => (
              <div
                key={fieldDS}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h5 className="text-center text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                  <Checkbox {...label} />
                  {fieldDS.replace(/[_]/g, " ")}
                </h5>
              </div>
            ))}
        </div>
        <span className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
          Dataset
        </span>
        <TableFile></TableFile>
      </div>
    </>
  );
}
