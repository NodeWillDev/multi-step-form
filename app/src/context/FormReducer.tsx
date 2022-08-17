import { useReducer } from "react";
import { IActions } from "./interfaces/IActions";
import { IDate } from "./interfaces/IDate";

const FormReducer = () => useReducer((date: IDate, action: IActions) => {

  switch (action.type) {
    case 'setName':
      return { ...date, name: action.payload };
    case 'setEmail':
      return { ...date, email: action.payload };
    case 'setStep':
      return { ...date, step: action.payload }
    default:
      return date;
  }
}, {
  email: '',
  name: '',
  step: 1
} as IDate);

export default FormReducer;