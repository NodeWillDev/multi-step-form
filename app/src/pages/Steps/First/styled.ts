import styled, { keyframes } from "styled-components";
const anime = keyframes`
    0%,
    100% {
      transform: translateX(0);
    }
    35% {
      transform: translateX(-15%);
    }
    70% {
      transform: translateX(15%);
    }
  `
export const Container = styled.div`
  padding: 10px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Description = styled.div`
  margin-top: 80px;
  display: block;
  width: 100%;
  font-size: 2rem;

  > p {
    opacity: .5;
  }
`

export const InputBox = styled.div`
  width: 100%;
  padding: 20px 0px;

  > input {
    margin-top: 80px;
    padding: 15px;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    font-size: 2.6em;
    color: white;
    letter-spacing: 2px;
    
    :focus {
      border-bottom: 1px solid #71ccf1; 
    }

    .nono{    
      animation: ${anime} 200ms linear;
    }
  }
`

export const ButtonBox = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 20px;
`