import styled from "styled-components";

export const Container = styled.div`
  display: grid;
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
  margin-top: 5px;
  grid-area: sidebar;
  > div{

    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
`

export const Page = styled.div`
  display: flex;
  margin-top: 20px;
  position: relative;
  grid-area: page;
  color: white;
`