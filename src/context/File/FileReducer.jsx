const FileReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "SET_FILE":
      console.warn(payload);
      return {
        ...state,
        file: payload,
      };
    default:
      return state;
  }
};

export default FileReducer;
