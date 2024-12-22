import { CardItem, Display, DisplayMedium } from "./styles";
import { CardPrice } from "./styles";


// eslint-disable-next-line react/prop-types
const CardHome = ({ icon, display, displayMedium }) => {
  return (
    <CardPrice>
      <CardItem>
        {icon}
        <Display>{display}</Display>
      </CardItem>
      <DisplayMedium> {displayMedium != null || undefined ? displayMedium : ''}</DisplayMedium>
    </CardPrice>
  )
}
export default CardHome;
