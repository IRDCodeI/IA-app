import { useContext, useEffect, useState } from "react";
import FileContext from "../context/File/FileContext";
import axios from "axios";
import ScatterPlot from "../charts/scatter";

export default function Charts() {
  const { file } = useContext(FileContext);
  const [mds, setMds]= useState(null);

  const getPythonChart = () => {
    axios
      .post(
        "http://127.0.0.1:8000/nlp",
        {
          file: {
            index: file.meta.fields,
            data: file.data
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setMds(JSON.parse(res.data))
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if (file) {
      getPythonChart();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      <div className="w-full h-full">
        <span className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
          Charts
        </span>
          <div className="w-full h-full flex flex-col">
            <ScatterPlot mds={mds}/>
          </div>
      </div>
    </>
  );
}
