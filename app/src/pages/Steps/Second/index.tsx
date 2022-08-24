import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";
import useForm from "../../../context/hook/useForm";

const Second = () => {

  const navigate = useNavigate();
  const { date, dispatch } = useForm();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      payload: e.target.value,
      type: 'setEmail'
    });
  }
  function handleClick() {
    //TODO
  }

  return <>
    <Theme step={2} >
      <S.Container>
        <p>Second step</p>
        <S.Box>
          <S.Description>
            <h3><span>{date.name}</span>, Put an email to contact</h3>
          </S.Description>
          <S.InputBox>
            <input
              placeholder="Your Email For Contact"
              type="text"
              value={date.email}
              onChange={onChange}
            />
          </S.InputBox>
        </S.Box>
        <S.ButtonBox>
          <Button
            text="Back"
            onClick={() => {
              navigate('/')
            }}
          />
          <Button
            text="Next"
            onClick={handleClick}
          />
        </S.ButtonBox>
      </S.Container>
    </Theme>
  </>
}

export default Second;