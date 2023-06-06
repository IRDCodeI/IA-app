/* eslint-disable react/prop-types */
import { useReducer } from "react"
import AIContext from "./IAContext"
import AIReducer from "./IAReducer"

export default function AIState(props){
  
  const initialState = {
    model: "chatgpt"
  }
  const [state, dispatch] = useReducer(AIReducer, initialState)


  const setModel = (model) => {
    dispatch({
      type: "SET_MODEL",
      payload: {
        model
      }
    })
  }

  return(
    <>
      <AIContext.Provider value={{
        model: state.model,
        setModel
      }}>
        {props.children}
      </AIContext.Provider>
    </>
  )
}