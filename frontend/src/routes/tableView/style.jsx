import { styled } from 'styled-components'
import { Container } from "../../styles/global";

export const ScrollView = styled.ul`
`

export const Loading = styled.aside`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const ContainerTable = styled(Container)`
    display: grid;
    grid-template-rows: max-content max-content 1fr max-content;
    padding-bottom: 2rem;
`

export const TableUtils = styled.div`
    display: flex;
    justify-content: space-between;
`

export const CountPage = styled.div`
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 1.6rem;
    font-weight: 500;
    border: 2px solid var(---icon-color);
    color: var(---icon-color);
`

export const Btn = styled.button`
    outline: none;
    padding: 4px 10px;
    background: transparent;
    border: 2px solid var(---icon-color);
    font-weight: 500;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg{
        font-size: 1.6rem;
        color: var(---icon-color);
    }
    cursor: pointer;
`

export const SpanTotal = styled.span`
    padding: 5px 8px;
    font-size: 1.6rem;
    font-weight: 600;
    color: var(---white);
    background-color: var(---icon-color);
    border-radius: 4px;

`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 1.6rem;
`;

export const TableRow = styled.tr`
    display: grid;
    grid-template-columns: 100px 1fr max-content;
    gap: 2rem;
    align-items: center;
    transition: all 1s; 
   
    &.active{
        display: grid;
        grid-template-rows: max-content max-content;
    }
    &.active > .info{
        transition: height 1s ease;
        padding: 5px;
        height: auto;
    }
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 1rem;
`;
export const Actions = styled.td`
    display: flex;
    gap: 1rem;
    .btn{
        background-color: var(---blue);
        outline: none;
        text-decoration: none;
        border: 0;
       
        padding:10px;
        border-radius: 4px;
        color: white;
        font-size: 2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;
        transition: all 1s;

        &:hover{
            filter: grayscale(.4);
        }
    }
`
export const TableCellInfo = styled(TableCell)`
    display: flex;
`

export const Infos = styled.td`
    height: 0;
    overflow: hidden;
    width: calc(100vw - (250px + 4rem));
    display: flex;
    flex-direction: column;
    gap: 15px;
    .row{
        display: flex;
        justify-content: space-between;
    }
    .textArea{
        padding: 10px;
        width: 100%;
        border: 2px solid var(---icon-color);
        border-radius: 4px;
    }
`

export const GroupInfos = styled.div`
    width: 100%;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   align-items: flex-start;
   p{
    text-overflow: ellipsis;
   }
`


export const Circle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
    font-size: 1.6rem;
  }
  `

export const ExpandedRow = styled.tr`
    background-color: #f5f5f5; 
    transition: all 0.3s ease;
`