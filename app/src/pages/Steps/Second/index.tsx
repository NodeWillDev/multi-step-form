import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useRef } from "react";
import useForm from "../../../context/hook/useForm";

const Second = () => {

  const navigate = useNavigate();
  const { date, dispatch } = useForm();
  const input_ref = useRef<HTMLInputElement>(null);
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  useEffect(() => {
    if (!date.name)
      navigate('/first-step');
  }, [date.name, navigate]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {

    dispatch({
      payload: e.target.value,
      type: 'setEmail'
    });
  }

  function handleClick() {
    if (input_ref.current) {
      if (!date.email || !regex.test(date.email)) {
        input_ref.current.style.borderBottom = "1px solid rgb(210 35 35)";
      } else {
        input_ref.current.style.borderBottom = "";
        navigate('/third-step');
      }
    }
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
              ref={input_ref}
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