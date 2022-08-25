import * as S from "./styled";
import Theme from "../../../components/Theme";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";
import useForm from "../../../context/hook/useForm";
import { useEffect, useRef, ChangeEvent } from "react";

const Third = () => {

  const navigate = useNavigate();
  const { date, dispatch } = useForm();
  const textarea_ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!date.email)
      navigate('/first-step');
  }, []);

  function onChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch({
      payload: e.target.value,
      type: 'setDescription'
    });
  }

  function handleClick() {

    if (textarea_ref.current) {
      if (!date.description) {
        textarea_ref.current.style.border = "1.5px solid rgb(210 35 35)";
      } else {
        textarea_ref.current.style.border = "";
        navigate('/finished')
      }
    }
    console.log(date)
  }

  return <>
    <Theme step={3} >
      <S.Container>
        <p>Third step</p>
        <S.Box>
          <p>OK! <span>{date.name}</span>, now that we have your data, tell us a little about yourself.</p>
          <S.Description>
            <h3>Tell me a little about you.</h3>
            <span>For example, write your experiences as a programmer.</span>
          </S.Description>
        </S.Box>
        <S.InputBox>
          <textarea ref={textarea_ref} onChange={onChange} name="" id="" cols={50} rows={10} />
        </S.InputBox>
        <S.ButtonBox>
          <Button
            text="Back"
            onClick={() => {
              navigate('/second-step')
            }}
          />
          <Button
            text="Finished"
            onClick={handleClick}
          />
        </S.ButtonBox>
      </S.Container>
    </Theme>
  </>
}

export default Third;