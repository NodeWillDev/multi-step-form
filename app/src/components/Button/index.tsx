import * as S from "./styled";

interface IButton {
  onClick: () => void;
  text: string,
}

const Button = ({ onClick, text }: IButton) => {
  return <>
    <S.Container>
      <button onClick={onClick}>
        {text}
        </button>
    </S.Container>
  </>
}

export default Button;