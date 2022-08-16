import { ReactNode } from "react";
import FormContext from "./FormContext";
import { reducer } from "./FormReducer";

interface IFormContextProvider {
  children: ReactNode
}

const FormContextProvider = ({ children }: IFormContextProvider) => {
  const [date, dispatch] = reducer;
  return (
    <FormContext.Provider value={{ date, dispatch }} >
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;