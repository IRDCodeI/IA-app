"use client";
import UploadFile from "@/components/upload";
import { useEffect, useState } from "react";

export default function DataFields() {
  const [fields, setFields] = useState([]);
  const readFields = (fields) => {
    setFields(fields);
  };

  return (
    <>
      <UploadFile dataFields={readFields}></UploadFile>
      <div className="w-11/12 mx-10 relative flex flex-col py-5 items-center">
        <span className="flex-shrink mx-4 my-5 text-xl font-semibold text-gray-400">
          Dataset Information
        </span>
        <div className="grid grid-cols-6 gap-4">
          {fields.length > 0 &&
            fields.map((fieldDS, index) => (
              <div
                key={index}
                className="px-5 py-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <h5 className="text-center text-2xl font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                  {fieldDS}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
