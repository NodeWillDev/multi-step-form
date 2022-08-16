import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { useRef } from "react";

const First = () => {

  const input_ref = useRef<HTMLInputElement>(null);

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
              type="text" />
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