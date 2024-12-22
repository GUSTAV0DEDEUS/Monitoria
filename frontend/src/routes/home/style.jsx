import { styled } from 'styled-components';
import { Container } from "../../styles/global";

export const HomeContainer = styled(Container)`
  display: grid;
  padding-top: 40px;
  padding-bottom: 40px;
  grid-template-rows: 1fr 1fr max-content;
  overflow: auto;
`
export const HomeCard = styled.div`
  background-color: var(---white);
  width: 200px;
  height: 100%;
`

const box = styled.div`
  display: flex;
  overflow: auto;
  height: 100%;
`

export const ListView = styled.ul`
display: flex;
  overflow: auto;
  height: 100%;
  gap: 1.4rem;
  padding-bottom: 10px;
  align-items: center;
`
export const Content = styled(box)`
  justify-content: space-between;
  align-items: center;
`
export const HomeRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 100vmin;
 
`
