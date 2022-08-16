import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { ChangeEvent, useRef } from "react";
import useForm from "../../../context/hook/useForm";

const First = () => {

  const { date } = useForm();

  const input_ref = useRef<HTMLInputElement>(null);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    // dispatch({
    //   payload: e.target.value,
    //   type: 'setName'
    // });
    console.log(date);
  }

  function handleClick() {
    //TODO
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