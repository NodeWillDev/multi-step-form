import styled from "styled-components";

export const Container = styled.div`
   font-size: .85em;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;  
  > p {
    opacity: .5;
    margin-left: 22px;
    margin-top: 25px;
    font-size: 1.2rem;

    > span {
      font-weight: bold;
    }
  }
`

export const Description = styled.div`
  margin-top: 35px;
  display: block;
  width: 100%;  

  > h3 {
    opacity: .5;
    font-size: 2em;
  }
  
  > span {
    font-size: 1.2em;
    letter-spacing: 1.5px;
  }
`

export const InputBox = styled.div`
  width: 100%;
  padding: 20px 0px;

  > textarea {
    margin-top: 40px;
    padding: 15px;
    width: 100%;
    max-width: 500px;
    max-height: 200px;
    background-color: rgba(0, 0, 0,  .5);
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    font-size: 1.2em;
    color: white;
    letter-spacing: 1.2px;
    transition: .6s;
    :focus {
      border-bottom: 1px solid #6f42bb; 
      background-color: rgba(0, 0, 0,  .25);
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
  background-color: rgba(0, 0, 0, .2);
  border-radius: 25px;
  transition: .8s;
  :hover{
    background-color: rgba(255, 255, 255, .1);    
  }
`