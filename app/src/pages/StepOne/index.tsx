import * as S from "./styled";
import Theme from "../../components/Theme";

const StepOne = () => {
  return <>
    <Theme step={1} >
      <S.Container>
        <h2>First step</h2>
        <S.Box>
          <S.Description>
            <p>Enter your name to start your CV.</p>
          </S.Description>
          <S.InputBox>
            <input placeholder="Your Name" type="text" />
          </S.InputBox>
        </S.Box>
      </S.Container>
    </Theme>
  </>
}

export default StepOne;