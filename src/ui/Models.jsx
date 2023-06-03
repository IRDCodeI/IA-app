/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { ScrollPanel } from "primereact/scrollpanel";
import { Chip } from "primereact/chip";
import "./ui.css";
import FileContext from "../context/File/FileContext";
import { v4 as uuidv4 } from "uuid";
import { RadioButton } from "primereact/radiobutton";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";

export default function ModelsIA() {
  const [titles, setTitles] = useState([]);
  const [selectedTitle, setSelectedTitle] = useState();
  const [abstract, setAbstract] = useState("Abstract");
  const [abstractGen, setAbstractGen] = useState("Abstract Generate");
  const { file } = useContext(FileContext);

  const generateAbstract = () => {
    const doc = {
      title: selectedTitle.name,
      abstract,
      model: "chatgpt",
    };

    axios
      .post(
        "http://127.0.0.1:8000/ai_abstract",
        {
          doc,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setAbstractGen(res.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const getFileData = (title) => {
    const data = file.data.filter((e) => e.title == title.name);
    setAbstract(data[0].abstract.replace(/['"]+/g, ''));
  };

  const handleChange = (e) => {
    getFileData(e.value);
    setSelectedTitle(e.value);
  };

  useEffect(()=>{
    if(selectedTitle){
        generateAbstract();
    }
  },[selectedTitle])

  useEffect(() => {
    if (file) {
      file.data.forEach((e) => {
        if (e.hasOwnProperty("title")) {
          titles.push({ name: e.title, key: uuidv4() });
        }
      });
      setTitles(titles);
      setSelectedTitle(titles[0]);
    }
  }, [file]);

  return (
    <>
      <div className="w-full h-full px-10">
        <div className="mb-4">
          <div className="flex flex-row">
            <h4 className="text-2xl font-bold dark:text-white text-sky-600 mr-5">
              Model
            </h4>
            <Chip label="GPT 3.5" />
          </div>
        </div>
        <div className="px-14">
          <div className="w-full h-full grid grid-cols-8 gap-4 mx-10">
            <div className="col-span-4 flex flex-col items-center">
              <span className="text-xl font-bold dark:text-white text-sky-600">
                Documents
              </span>
              <ScrollPanel
                style={{ width: "100%", height: "600px", margin: "20px 0px" }}
              >
                <div className="card flex justify-content-center">
                  <div className="flex flex-col gap-3">
                    {titles.map((title) => {
                      return (
                        <div
                          key={title.key}
                          className="flex align-items-center"
                        >
                          <RadioButton
                            appendTo={document.body}
                            inputId={title.key}
                            name="category"
                            value={title}
                            onChange={handleChange}
                            checked={selectedTitle.key === titles.key}
                          />
                          <label htmlFor={title.key} className="ml-2">
                            {title.name}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </ScrollPanel>
            </div>
            <div className="col-span-4 flex flex-col items-start mx-10">
              <p className="text-xl font-bold dark:text-white text-sky-600">
                Title:{" "}
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {selectedTitle && selectedTitle.name}
                </span>
              </p>
              <div className="flex flex-col w-full">
                <span className="text-xl font-bold dark:text-white text-sky-600 my-6">
                  Original Abstract:
                </span>
                <InputTextarea
                  readOnly
                  id="username"
                  value={abstract}
                  rows={8}
                  cols={30}
                />
              </div>
              <div className="flex flex-col w-full">
                <span className="text-xl font-bold dark:text-white text-sky-600 my-6">
                  Generate Abstract:
                </span>
                <InputTextarea
                  readOnly
                  id="username"
                  value={abstractGen}
                  rows={8}
                  cols={30}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
