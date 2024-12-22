import PropTypes from 'prop-types';
import { TableCellInfo, TableCell, TableRow, Infos, GroupInfos, Actions, Circle } from '../routes/tableView/style';
import { Link } from 'react-router-dom';
import Expanded from '../routes/tableView/expandedItem';
import { BsCheckCircle, BsDashCircle } from 'react-icons/bs';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

const ItemInfo = (props) => {
  const {
    cod_id,
    date,
    description,
    location,
    name,
    number_class,
    process,
    status,
    brand,
    model,
    price,
    index
  } = props;

  const [expandedItems, setExpandedItems] = useState(Array(10).fill(false));

  const handleExpanded = () => {
    const newExpandedItems = [...expandedItems];
    for (let i = 0; i < newExpandedItems.length; i++) {
      if (i !== index) {
        newExpandedItems[i] = false;
      }
    }
    newExpandedItems[index] = !newExpandedItems[index];


    setExpandedItems(newExpandedItems);

    Expanded(index, !newExpandedItems[index]);
  }

  const boolStatus = status === 'ativo';

  return (
    <TableRow className={`expandable-row`}>
      <TableCell>
        <Circle color={boolStatus ? '#B8E9D7' : '#FECEDC'}>
          {boolStatus ? <BsCheckCircle /> : <BsDashCircle />}
        </Circle>
      </TableCell>
      <TableCellInfo>
        <GroupInfos>
          <p><strong>Nome:</strong> {name}</p>
          <p><strong>Código:</strong> #{cod_id}</p>
          <p><strong>processo: </strong>{process}</p>
          <p><strong>data: </strong>{date}</p>
        </GroupInfos>
      </TableCellInfo>
      <Actions>
        <Link to={`/list/${cod_id}`} className='btn'><MdOutlineEdit /></Link>
        <button className="btn" onClick={handleExpanded}>
          {expandedItems[index] ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </Actions>
      <Infos className='info' colSpan='3'>
        <div className="row">
          <p><strong>Valor:</strong> {price}</p>
          <p><strong>Marca:</strong> {brand}</p>
          <p><strong>Modelo:</strong> {model}</p>
          <p><strong>localizacao:</strong> {location}</p>
          <p><strong>Numero da sala:</strong> {number_class}</p>
        </div>

        <div className="textArea">
          {description}
        </div>
      </Infos>
    </TableRow>
  );
};

ItemInfo.propTypes = {
  cod_id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number_class: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default ItemInfo;
