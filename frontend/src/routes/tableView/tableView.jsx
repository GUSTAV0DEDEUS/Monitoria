import { useEffect, useState } from "react";
import { getAllProperties } from "../../services/properties.service";
import ItemInfo from "../../components/propertyCard";
import InputSearch from "../../components/SearchInput";
import { Btn, ContainerTable, CountPage, Loading, SpanTotal, Table, TableRow, TableHeader, TableUtils } from "./style";
import { H1 } from "../../styles/labels";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";




const TableComponent = () => {
  const [properties, setProperties] = useState([]);
  const [values, setValues] = useState({});
  const [currentPage, setCurrentPage] = useState(0);
  const [totalProperties, setTotalProperties] = useState(0);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  async function findAllProperties(page) {
    const response = await getAllProperties(itemsPerPage, page);
    setProperties(response.data.properties);
    setTotalProperties(response.data.total);
    setValues({
      nextUrl: response.data.nextUrl,
      previousUrl: response.data.previousUrl,
    });
  }

  useEffect(() => {
    findAllProperties(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalProperties / itemsPerPage);

  const handlePreviousPage = () => {
    if (values.previousUrl) {
      setCurrentPage(currentPage - 10);
      setPage(page - 1)
    } else {
      setCurrentPage(0)
      currentPage < 10 && setPage(0)
    }
  };

  const handleNextPage = () => {
    if (values.nextUrl) {
      setCurrentPage(currentPage + 10);
      setPage(page + 1)
    } else {
      setCurrentPage(currentPage + (totalProperties - currentPage))
      page < totalPages && setPage(page + 1)
    }
  };

  return (
    <ContainerTable>
      <InputSearch></InputSearch>
      <TableUtils>
        <H1>Patrimônio cadastrado</H1> <SpanTotal>{totalProperties}</SpanTotal>
      </TableUtils>
      {properties.length !== 0 ? (
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Condição</TableHeader>
              <TableHeader>Informações</TableHeader>
              <TableHeader>Ações</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {properties.map((item, i) => (
              <ItemInfo key={item.cod_id} {...item} index={i} />
            ))}
          </tbody>
        </Table>

      ) : (
        <Loading>
          <img src="/loader.gif" alt="Carregando conteúdo" />
        </Loading>
      )}
      <TableUtils>
        <Btn className="previous" onClick={handlePreviousPage}>
          <MdNavigateBefore />
        </Btn>
        <CountPage className="count">{page}</CountPage>
        <Btn className="next" onClick={handleNextPage}>
          <MdNavigateNext />
        </Btn>
      </TableUtils>
    </ContainerTable>
  );
}

export default TableComponent;
