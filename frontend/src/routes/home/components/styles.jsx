import { styled } from 'styled-components'

export const PropertyCard = styled.li`
    min-width: 300px;
    height: 100%;
    max-height: 200px;
    display: grid;
    grid-template-rows: max-content 1fr max-content;
    background: var(---white);
    padding: 20px;
    border-radius: 16px;

`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CardBody = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`
export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  svg{
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export const Inline = styled.div`
  display: flex;
  gap: 6px;
  svg{
    font-size: 2rem;
  }
`
export const ChartCard = styled.div`
  height: 100%;
  width: 300px;
`

export const CardPrice = styled.div`
  width: calc((100% / 3) - 2rem);
  height: 100%;
  max-height: 200px;
  background: var(---white);
  border-radius: 16px;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  svg{
    font-size: 4rem;
    color: var(---blue);
  }
`

export const Display = styled.h1`
  font-size: 2rem;
  color: var(---blue);

`

export const DisplayMedium = styled.h2`
  font-size: 4rem;
  color: var(---icon-color)
`

export const CardItem = styled.div`
 display: flex;
 align-self: flex-start;
 align-items: center;
 gap: 1.4rem;
`