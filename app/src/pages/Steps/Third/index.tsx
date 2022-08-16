import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";

const Third = () => {  

  function handleClick() {
    //TODO
  }

  return <>
    <Theme step={3} >
      <S.Container>
        <p>Third step</p>        
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

export default Third;