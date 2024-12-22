import { styled } from 'styled-components';

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(---black);
  span{
    font-size: 1.4rem;
    font-weight: 400;
  }
`
export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(---black);
`
export const TileHeader = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-overflow: ellipsis;
  text-transform: capitalize;
`

export const TileBody = styled.h4`
  text-transform: capitalize;
  font-size: 1.2rem;
  font-weight: 500;
`

export const TileId = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: var(---icon-color);
`

export const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.8);
`

export const LabelC = styled.span`
  display: block;
  padding: 5px 8px;
  border-radius: 4px;
  background-color: rgba(20, 99, 255, .6);
  color: var(---white);
  font-weight: 600;
`
