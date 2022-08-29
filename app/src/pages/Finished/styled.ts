import styled from "styled-components";

export const Container = styled.div`  

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > h1 {
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 5px;
    margin-bottom: 25px;
    opacity: .5;
    color: antiquewhite;
  }
`

export const SysMessage = styled.div`

  padding: 10px;
  text-align: center;

  > h2 {

    font-weight: 100;
    letter-spacing: 1.25px;

    > span {

      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
      opacity: .4;
    }
  }
`