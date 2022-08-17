import { ReactNode } from "react";
import FormContext from "./FormContext";
import FormReducer from "./FormReducer";

interface IFormContextProvider {
  children: ReactNode
}

const FormContextProvider = ({ children }: IFormContextProvider) => {
  const [date, dispatch] = FormReducer();
  return (
    <FormContext.Provider value={{ date, dispatch }} >
      {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;