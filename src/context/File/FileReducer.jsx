const FileReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "SET_FILE":
      return {
        ...state,
        fileFields: payload.fileFields,
        fileData: payload.fileData
      };
    default:
      return state;
  }
};

export default FileReducer;
