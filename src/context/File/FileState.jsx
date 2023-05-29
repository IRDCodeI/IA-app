/* eslint-disable react/prop-types */
import { useReducer } from "react";
import FileReducer from "./FileReducer";
import FileContext from "./FileContext";

const FileState = (props) => {
  const initialState = {
    fileFields: [],
    fileData: [],
  };

  const [state, dispatch] = useReducer(FileReducer, initialState);

  const setFile = (file) => {
    dispatch({
      type: "SET_FILE",
      payload: {
        fileFields: file.meta.fields,
        fileData: file.data,
      },
    });
  };

  return (
    <>
      <FileContext.Provider
        value={{
          fileFields: state.fileFields,
          fileData: state.fileData,
          setFile,
        }}
      >
        {props.children}
      </FileContext.Provider>
    </>
  );
};

export default FileState;
