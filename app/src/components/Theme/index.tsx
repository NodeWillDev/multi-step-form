import Header from "../Header";
import Step from "./components/Step";
import ITheme from "./interfaces/ITheme";
import * as S from "./styled";
import { AiOutlineMail, AiOutlineUser, AiOutlineSortDescending} from "react-icons/ai";
import { TbFileDescription } from "react-icons/tb";

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
                routerTo="/first-step"
                actived={step === 1}
                description="For started, insert your name"
                title="Your Name"
                icon={<AiOutlineUser />}
              />
            </div>
            <div>
              <Step
                routerTo="/second-step"
                actived={step === 2}
                description="Please insert a email for contact"
                title="Email Collect"
                icon={<AiOutlineMail />}
              />
            </div>
            <div>
              <Step
                routerTo="/third-step"
                actived={step === 3}
                description="Make a prev description yourself"
                title="Describe You"
                icon={<TbFileDescription />}
              />
            </div>
            <div>
              <Step
                routerTo="/finished"
                actived={step === 'finished'}
                description="Your registration has been completed and sent to us with the following information"
                title="Finished"
                icon={<AiOutlineSortDescending />}
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