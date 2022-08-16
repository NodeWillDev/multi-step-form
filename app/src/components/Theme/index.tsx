import Header from "../Header";
import Step from "./components/Step";
import ITheme from "./interfaces/ITheme";
import * as S from "./styled";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";

const Theme = ({ children, step }: ITheme) => {
  return <>
    <S.Container>
      <S.Area>
        <S.Header>
          <Header />
        </S.Header>

        <S.Sidebar>
          <div>
            <div>
              <Step
                routerTo="step1"
                actived={true}
                description="For started, insert your name"
                title="Your Name"
                icon={<AiOutlineUser />}
              />
            </div>
            <div>
              <Step
                routerTo="step2"
                actived={false}
                description="Please insert a email for contact"
                title="Email Collect"
                icon={<AiOutlineMail />}
              />
            </div>
          </div>
        </S.Sidebar>
        <S.Page>
          {children}
        </S.Page>
      </S.Area>
    </S.Container>
  </>
}

export default Theme;