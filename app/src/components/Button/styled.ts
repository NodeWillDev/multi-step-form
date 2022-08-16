import styled from "styled-components";

export const Container = styled.div`
  display: inline-flex;
  padding: 5px;

  > button {
    border: none;
    background: none;
    opacity: .6;
    letter-spacing: 1.5px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: .2s;

    :hover {
      opacity: 1;
      color: #b776fa;
      letter-spacing: 5px;
    }
  }
`