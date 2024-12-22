import styled from "styled-components";
// {keyframes}
export const FormContent = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
 `
export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 4rem;
`
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(---icon-color);
  span{
    font-weight: 600;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid var(---border-color);
  border-radius: 4px;
  outline: 0;

  font-size: 1.4rem;
  color: var(---icon-color);

`

export const InputSubmit = styled(Input)`
  background-color: #13C525;
  border: none;
  color: var(---white);

  font-weight: 700;
  cursor: pointer;
  transition:  1s;

  &:hover{
    filter: grayscale(.5);
  }
`

export const InputReset = styled(Input)`
  background-color: #FFB200;
  border: none;
  color: var(---white);
  font-weight: 700;
  cursor: pointer;
  transition: 1s;

  &:hover{
    filter: grayscale(.5);
  }
`

export const TextArea = styled.textarea`
  padding: 12px;
  border: 2px solid var(---border-color);
  border-radius: 4px;
  outline: 0;

  font-size: 1.4rem;
  color: var(---icon-color);
`

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 2px 3px 43px 0px rgba(0,0,0,0.26);
  -webkit-box-shadow: 2px 3px 43px 0px rgba(0,0,0,0.26);
  -moz-box-shadow: 2px 3px 43px 0px rgba(0,0,0,0.26);
  background: var(---white);

  padding: 34px;
  border-radius: 16px;

  div{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    
    svg{
      font-size: 4rem;
      color: #13C525;
    }

    button{
      width: 100%;
      padding: 12px;
      border-radius: 4px;
      background-color: #FFD7D7;
      border: none;

      font-weight: 700;
      cursor: pointer;
      transition: 1s;
      
      &:hover{
        background-color: #FF4A4A;
        color: var(---white);
      }
    }
  }
`

export const InputRadio = styled.div`
  display: flex;
  gap: 2rem;
  height: 100%;
  align-items: center;
  label{
    display: flex;
    gap: 1rem;
    padding: 5px 8px;
    color: var(---white);
    background: var(---icon-color);
    border-radius: 4px;
  }

`