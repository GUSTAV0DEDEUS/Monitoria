import { createGlobalStyle, styled } from "styled-components";

export default createGlobalStyle`

  :root{
  font-size: 62.5%;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased !important;  

  /* font colors */
  ---blue: #1463FF;
  ---white: #FFFFFF;
  ---black: #2A2A2A;

  /* container */
  ---container: #F8F9FB;

  /* Border color */
  ---border-color: #E9E9E9;

  /* icon color */
  ---icon-color: #5E6980;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    height: 100vh;
    width: 100vw;
  }

  ul{
    list-style: none;
  }
`;

export const AppContainer = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
`

export const Container = styled.main`
  height: 100vh;
  overflow: auto;
  padding: 0 34px 0 ;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: var(---container);
`