import { useReducer } from "react";
import reducer, { initialState } from "../UseReducer/hookReducer";
import Context from "./Context";

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
export default Provider;
