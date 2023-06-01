const FileReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "SET_FILE":
      console.warn(payload)
      return {
        ...state,
        fileName: payload.name,
        file: payload.file,
      };
    case "UPDATE_FILE":
      return {
        ...state,
        file: payload,
      };
    case "RESET_FILE":      
      return {
        ...state,
        file: payload,
      };
    default:
      return state;
  }
};

export default FileReducer;
