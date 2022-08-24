import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { ChangeEvent, useRef } from "react";
import useForm from "../../../context/hook/useForm";
import { useNavigate } from "react-router-dom";

const First = () => {

  const { date, dispatch } = useForm();
  const navigate = useNavigate();

  const input_ref = useRef<HTMLInputElement>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      payload: e.target.value,
      type: 'setName'
    });
  }

  function handleClick() {
    if (input_ref.current) {      
      if (!date.name) {
        input_ref.current.style.borderBottom = "1px solid rgb(210 35 35)";
      } else {       
        input_ref.current.style.borderBottom = "";        
        navigate('second-step')
      }
    }
  }

  return <>
    <Theme step={1} >
      <S.Container>
        <p>First step</p>
        <S.Box>
          <S.Description>
            <h3>Enter your name to start your CV.</h3>
          </S.Description>
          <S.InputBox>
            <input
              ref={input_ref}
              placeholder="Your Name"
              type="text"
              value={date.name}
              onChange={onChange}
            />
          </S.InputBox>
        </S.Box>
        <S.ButtonBox>
          <Button
            text="Next"
            onClick={handleClick}
          />
        </S.ButtonBox>
      </S.Container>
    </Theme>
  </>
}

export default First;