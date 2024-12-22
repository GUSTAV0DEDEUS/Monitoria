import { styled } from 'styled-components';

export const Search = styled.div`
  width: 100%;
  position: relative;
  margin-top: 4rem;

  svg{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    font-size: 2.4rem;
    color: var(---icon-color);
  }

`

export const SearchInput = styled.input`
    width: 100%;
    padding: 12px 48px;
    border: none;
    border-bottom: 1px solid var(---border-color);
    font-size: 1.4rem;
    outline: none;
    color: var(---icon-color);
    background: transparent;
    
`
