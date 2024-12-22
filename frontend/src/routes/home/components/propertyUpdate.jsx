import { Text, TileHeader, TileId } from "../../../styles/labels";
import { CardBody, CardHeader, Inline, PropertyCard } from "./styles";
import { MdUpdate } from 'react-icons/md';
import PropTypes from 'prop-types';

const PropertyUpdate = ({ name, cod_id, register }) => {
  console.log(register)
  return (
    <PropertyCard>
      <CardHeader>
        <TileHeader>{name}</TileHeader>
        <TileId>#{cod_id}</TileId>
      </CardHeader>
      <CardBody>
        <Inline>
          <MdUpdate />
          <Text>{register[0]}</Text>
        </Inline>
      </CardBody>
    </PropertyCard>
  );
}
PropertyUpdate.propTypes = {
  name: PropTypes.string.isRequired,
  cod_id: PropTypes.number.isRequired,
  register: PropTypes.array.isRequired
};
export default PropertyUpdate;