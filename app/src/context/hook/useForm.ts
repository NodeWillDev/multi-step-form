import { useContext } from "react"
import FormContext from "../FormContext";

const useForm = () => {
  const context = useContext(FormContext);

  return context;
}

export default useForm;