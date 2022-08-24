import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: auto;
  font-size: .98rem;  
`

export const Area = styled.div`
  display: grid;
  padding: 10px; 
  grid-template-columns: 2fr 4fr;
  grid-template-areas: "header header"
                      "sidebar page";
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: header;
`

export const Sidebar = styled.div`
  position: relative;
  width: 350px;
  height: 500px;
  grid-area: sidebar;    
  display: flex;
  align-items: center;  
  > div {            
    padding-top: 20px;
    padding-bottom: 20px;
    > div {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }
`

export const Page = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  grid-area: page;
  color: white;
  padding: 25px;
`