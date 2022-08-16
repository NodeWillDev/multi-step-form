import { createContext } from "react";
import { IActions } from "./interfaces/IActions";
import { IDate } from "./interfaces/IDate";

interface IFormContext {
  date: IDate,
  dispatch: (action: IActions) => void
}

const FormContext = createContext({} as IFormContext);

export default FormContext;