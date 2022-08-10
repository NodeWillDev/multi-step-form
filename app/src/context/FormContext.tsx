import { createContext } from "react";
import IUser from "../entities/IUser";

type TypeFormAction = "setEmail" | "setName";

interface IFormContext {
  user: IUser,
  action: TypeFormAction;
  payload: string;
}

const FormContext = createContext<IFormContext>({} as IFormContext);

export default FormContext;