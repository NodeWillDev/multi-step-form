import styled from "styled-components";

export const Container = styled.div`
   font-size: .85em;
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

  > h3 {
    opacity: .5;
    font-size: 2em;
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
    transition: .6s;
    :focus {
      border-bottom: 1px solid #6f42bb; 
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