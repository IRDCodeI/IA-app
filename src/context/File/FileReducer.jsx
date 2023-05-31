const FileReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "SET_FILE":
      return {
        ...state,
        file: payload,
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
