export default function AIReducer(state, action){
  const {payload, type} = action

  switch(type){
    case "SET_MODEL":
      return {
        ...state,
        model: payload.model
      }
    default:
      return state
  }
}