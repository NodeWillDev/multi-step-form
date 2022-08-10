import styled from "styled-components";
import IStyled from "./interfaces/IStyled";

export const Container = styled.div<IStyled>`
  display: flex;
  align-items: center;
  color: ${props => props.actived ? "#0affb0" : "white"};
  width: 300px;
  max-width: 300px;  
  font-size: .7rem;
`

export const Icon = styled.div`
  margin-left: auto;
  font-size: 2.4em;
  transition: .2s;  
`

export const TextBox = styled.div`
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
`

export const Title = styled.div`
  letter-spacing: 1.5px;
  font-size: 1.15em;

`

export const Description = styled.div`
  margin-top: 5px;
  font-size: 1.08em;
  letter-spacing: 1.1px;
`