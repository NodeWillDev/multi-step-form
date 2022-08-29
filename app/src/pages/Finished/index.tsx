import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Theme from "../../components/Theme"
import useForm from "../../context/hook/useForm";
import { IDate } from "../../context/interfaces/IDate";
import * as S from "./styled";

const Finished = () => {

  const { date } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    (Object.keys(date) as (keyof IDate)[])
      .forEach((key) => {
        if (!date[key]) {
          return navigate('/first-step');
        }
      })
  }, [navigate, date]);

  return <>
    <Theme step={"finished"} >
      <S.Container>
        <h1>Resume Completed And Sent Successfully</h1>
        <S.SysMessage>
          <h2>Thanks <span>{date.name}</span> For registering with us, we'll be in touch shortly.</h2>
        </S.SysMessage>    
      </S.Container>

    </Theme>
  </>
}

export default Finished;