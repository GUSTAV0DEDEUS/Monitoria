import styled from "styled-components";
// {keyframes}

export const Head = styled.header`
  height: 100vh;
  width: ${props => (props.count == 1 ? "200px" : "80px")};
  border-right: 1px solid var(---border-color) ;
  position: relative;
  transition: .8s all;
  nav > a{
    justify-content: ${props => (props.count == 1 ? "start" : "center")};
  }
  nav > a > span{
    width: ${props => (props.count == 1 ? "0" : "auto")};
    display: ${props => (props.count == 1 ? "inline" : "none")};

  }
`
export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 100px;
  align-items: center;
  a {
    width: calc(100% - 20px);
    padding: 20px;
    color: var(---icon-color);
    border-radius: 4px;
    display: flex;
    align-items: end;
    gap: 1rem;
    transition: .6s;
    text-decoration: none;
    
    &:hover{
      background-color: var(---blue);
      color: var(---white);
    }
    &.active{
      background-color: var(---blue);
      color: var(---white);
    }
    span{
      font-size: 1.2rem;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
    }
    svg{
      font-size: 1.8rem;
    }
  }

`
export const IconButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: var(---white);
  border: .1px solid var(---border-color);
  box-shadow: 1px 0px 42px 1px rgba(0,0,0,0.16);
  -webkit-box-shadow: 1px 0px 42px 1px rgba(0,0,0,0.16);
  -moz-box-shadow: 1px 0px 42px 1px rgba(0,0,0,0.16);
  outline: none;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 20px;
  right: -20px;

  svg{
    font-size: 2rem;
    color: var(---blue);
  }
`