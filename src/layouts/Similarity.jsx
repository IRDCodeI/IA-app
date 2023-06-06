import { useEffect, useState, useContext } from "react";
import Loader from "../components/Loader";
import { Dropdown } from "primereact/dropdown";
import axios from "axios";
import { Chip } from "primereact/chip";
import SimilarityChart from "../ui/SimilarityChart";
import AIContext from "../context/AI/IAContext";

export default function Similarity() {
  const [loader, setLoader] = useState(false);
  const [doc, setDoc] = useState(null);
  const [titles, setTitles] = useState(null);
  const [ai, setAi] = useState()

  const {model} = useContext(AIContext)

  useEffect(() => {
    setLoader(true);
    axios
      .get("http://localhost:8000/similarity/documents", {
        params: {
          model,
        },
      })
      .then((res) => {
        console.warn(res);
        setLoader(false);
        setTitles(res.data);
        
      })
      .catch((err) => {
        console.warn(err)
      });
  }, [model]);
  
  useEffect(() => {
    model == 'chatgpt' ? setAi("GPT 3.5") : setAi("Bard")
  }, [model])


  return (
    <>
      <Loader state={loader} />
      <div className="w-full h-full">
        <div className="w-full flex flex-row justify-around items-center">
          <div className="flex flex-row">
            <h4 className="text-2xl font-bold dark:text-white text-sky-600 mr-5">
              Model
            </h4>
            <Chip label={ai} />
          </div>
          <div className="w-96 flex flex-auto flex-row space-x-4 items-center">
            <span className="flex-shrink mx-4 my-5 text-2xl self-start font-semibold text-sky-600">
              Documents
            </span>
            <div className="w-full h-full flex flex-col">
              <div className="card flex justify-content-center">
                <Dropdown
                  value={doc}
                  onChange={(e) => setDoc(e.value)}
                  options={titles}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="w-full md:w-14rem"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <SimilarityChart title={doc} model="chatgpt"/>
        </div>
      </div>
    </>
  );
}
