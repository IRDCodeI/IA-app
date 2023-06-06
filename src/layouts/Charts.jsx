import { useContext, useEffect, useState, useRef } from "react";
import FileContext from "../context/File/FileContext";
import axios from "axios";
import ScatterPlot from "../charts/Scatter";
import Loader from "../components/Loader";
import { Toast } from 'primereact/toast';

export default function Charts() {
  const { file } = useContext(FileContext);
  const [mds, setMds]= useState(null);
  const [loader, setLoader] = useState(false)

  const toast = useRef(null);

  const getPythonChart = () => {
    setLoader(true)
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
        setLoader(false)
        setMds(JSON.parse(res.data))
        showSuccess()
      })
      .catch((err) => {
        setLoader(false)
        console.warn(err);
        showError()
      });
  };


  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Chart Generate', life: 3000});
  }

  const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'Error on NLP Process', life: 3000});
  }

  useEffect(() => {
    if (file ) {
      getPythonChart();
    }
  }, [file]);

  return (
    <>
      <Loader state={loader}/>
      <Toast ref={toast} />
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
