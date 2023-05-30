/* eslint-disable react/prop-types */
import { useReducer } from "react";
import FileReducer from "./FileReducer";
import FileContext from "./FileContext";

const FileState = (props) => {
  const initialState = {
    file: null,
  };

  const [state, dispatch] = useReducer(FileReducer, initialState);

  const setFile = (file) => {
    dispatch({
      type: "SET_FILE",
      payload: file,
    });
  };

  return (
    <>
      <FileContext.Provider
        value={{
          file: state.file,
          setFile,
        }}
      >
        {props.children}
      </FileContext.Provider>
    </>
  );
};

export default FileState;
