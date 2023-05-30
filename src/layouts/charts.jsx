import { useContext, useEffect } from "react";
import FileContext from "../context/File/FileContext";
import axios from "axios";

export default function Charts() {
  const { file } = useContext(FileContext);

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
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    if(file){
      getPythonChart();
    }
  }, [file]);

  return (
    <>
      <div className="w-max">
        <span className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
          Charts
        </span>
      </div>
    </>
  );
}
