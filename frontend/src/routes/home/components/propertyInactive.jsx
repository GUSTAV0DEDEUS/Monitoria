import { TileHeader, TileId, LabelC, Text } from "../../../styles/labels";
import { CardBody, CardFooter, CardHeader, Inline, PropertyCard } from "./styles"
import { MdOutlineAttachMoney, MdOutlinePlace, MdOutlineArticle } from 'react-icons/md'
import PropTypes from 'prop-types';
const PropertyInactive = (props) => {
  const { cod_id, date, location, name, process, price } = props;
  const formattedPrice = price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return (
    <PropertyCard>
      <CardHeader>
        <TileHeader>{name}</TileHeader>
        <TileId>#{cod_id}</TileId>
      </CardHeader>
      <CardBody>
        <Inline>
          <MdOutlineArticle />
          <Text >{process}</Text>
        </Inline>
        <Inline>
          <MdOutlineAttachMoney />
          <Text >{formattedPrice}</Text>
        </Inline>
        <Inline>
          <MdOutlinePlace />
          <Text>{location}</Text>
        </Inline>
      </CardBody>
      <CardFooter>
        <LabelC className="date">{date}</LabelC>
      </CardFooter>
    </PropertyCard >
  );
}
PropertyInactive.propTypes = {
  cod_id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number_class: PropTypes.string.isRequired,
  process: PropTypes.string.isRequired,
};
export default PropertyInactive;