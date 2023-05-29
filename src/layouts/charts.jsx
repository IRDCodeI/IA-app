import { useContext, useEffect, useState } from "react";
import FileContext from "../context/File/FileContext";
import axios from "axios";

export default function Charts() {
  const { fileData } = useContext(FileContext);
  const [data, setData] = useState()
  
  const getPythonChart = () => {
    axios.post("http://127.0.0.1:8000/nlp", {
      message: "Hello"
    }).then((res) => {
      console.warn(res)
    }).catch(err => {
      console.warn(err)
    })
  }

  useEffect(() => {
    setData(fileData)
    getPythonChart()
  }, [fileData])



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
