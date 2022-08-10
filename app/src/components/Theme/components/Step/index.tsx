import * as S from "./styled";
import IStyled from "./interfaces/IStyled";

interface IStep extends IStyled {
  icon: JSX.Element,
  title: string,
  description: string,
}

const Step = ({ description, icon, title, actived }: IStep) => {
  return <>
    <S.Container actived={actived} >
      <S.TextBox>
        <S.Title>
          <h2>{title}</h2>
        </S.Title>
        <S.Description>
        <p>{description}</p>
        </S.Description>
      </S.TextBox>
      <S.Icon>
        {icon}
      </S.Icon>
    </S.Container>
  </>
}

export default Step;