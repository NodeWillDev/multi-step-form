import * as S from "./styled";
import IStyled from "./interfaces/IStyled";
import { Link } from "react-router-dom";

interface IStep extends IStyled {
  icon: JSX.Element,
  title: string,
  description: string,
  routerTo: string
}

const Step = ({ description, icon, title, actived, routerTo }: IStep) => {
  return <>
    <S.Container actived={actived} >
      <Link to={routerTo} >
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
      </Link>
    </S.Container>
  </>
}

export default Step;