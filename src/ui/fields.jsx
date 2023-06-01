/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, FormControlLabel, FormGroup } from "@mui/material";
import UploadFile from "../components/Upload";
import FileContext from "../context/File/FileContext";
import TableFile from "./Table";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useContext, useState } from "react";
import CachedSharpIcon from "@mui/icons-material/CachedSharp";
import { IconButton } from "@mui/material";
import Charts from "../layouts/charts";

export default function DataFields() {
  const [fields, setFields] = useState();
  const [status, setStatus] = useState({});
  const obj = {};

  const { file, resetFile, updateFile } = useContext(FileContext);

  useEffect(() => {
    if (file) {
      setFields(file.meta.fields);
      setCheckbox(file);
    }
  }, [file]);

  const setCheckbox = (file) => {
    file.meta.fields.forEach((e) => (obj[`${e}`] = true));
    setStatus(obj);
  };

  const handleChange = (event) => {
    file.data.forEach((e) => {
      delete e[event.target.name];
    });
    file.meta.fields = file.meta.fields.filter((e) => e != event.target.name);

    updateFile(file);
  };

  const hanldeClick = () => {
    resetFile();
  };

  return (
    <>
      <UploadFile></UploadFile>
      <div className="relative m-0 flex flex-col py-5 items-center">
        <span
          className="flex-shrink mx-4 my-3 text-xl font-semibold text-gray-400">
          Dataset Information
        </span>
          <div className="w-full">
            <h4 className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
              Fields
            </h4>
            <div className="mb-5">
              <FormControl component="fieldset" variant="standard">
                <FormGroup
                  className="grid grid-cols-6 gap-4"
                  sx={{
                    flexDirection: "row",
                  }}
                >
                  {fields &&
                    fields.map((field, i) => (
                      <div
                        key={field}
                        className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                      >
                        <h5 className="text-center text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                          <FormControlLabel
                            control={
                              <Checkbox
                                key={i}
                                checked={status[field]}
                                label={field}
                                onChange={handleChange}
                                name={field}
                                inputProps={{ "aria-label": "controlled" }}
                              />
                            }
                          />
                          {field.replace(/[_]/g, " ")}
                        </h5>
                      </div>
                    ))}
                </FormGroup>
              </FormControl>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div className="col-span-2">
                <span className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
                  Dataset{" "}
                  <IconButton onClick={hanldeClick}>
                    <CachedSharpIcon />
                  </IconButton>
                </span>
                <div className="h-full flex flex-col justify-center">
                  <TableFile></TableFile>
                </div>
              </div>
              <div className="col-span-2">
                <Charts></Charts>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
