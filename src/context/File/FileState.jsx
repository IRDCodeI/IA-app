/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";
import FileReducer from "./FileReducer";
import FileContext from "./FileContext";

const FileState = (props) => {
  const initialState = {
    fileName: "Select a csv file.",
    file: null,
  };

  const [data, setData] = useState()

  const [state, dispatch] = useReducer(FileReducer, initialState);

  const setFile = (file, name) => {

    dispatch({
      type: "SET_FILE",
      payload: {
        name,
        file
      },
    });
  };

  const resetFile = () => {
    console.warn(data)
    dispatch({
      type: "RESET_FILE",
      payload: data
    })
  }

  const updateFile = (file) => {
    dispatch({
      type: "UPDATE_FILE",
      payload:file
    })
  }

  return (
    <>
      <FileContext.Provider
        value={{
          fileName: state.fileName,
          file: state.file,
          setFile,
          updateFile,
          resetFile
        }}
      >
        {props.children}
      </FileContext.Provider>
    </>
  );
};

export default FileState;
