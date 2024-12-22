import { H2 } from "../../styles/labels";
import PropertyInactive from "./components/propertyInactive";
import PropertyUpdate from "./components/propertyUpdate"
import { Content, HomeContainer, HomeRow, ListView } from "./style";
import CardHome from "./components/card";
import { MdOutlineAttachMoney, MdOutlineSchool } from "react-icons/md";
import { useEffect, useState } from "react";
import { allAmountPropertiesService, allInactiveItemsService, allModifiedItemsService } from "../../services/dashboard.service";

const Home = () => {
  const [countProperties, setCountProperties] = useState();
  const [price, setPrice] = useState(0);
  const [countPropertiesInactive, setCountPropertiesInactive] = useState([]);
  const [priceInactive, setPriceInactive] = useState(0);
  const [modifiedItems, setModifiedItems] = useState([]);



  async function allAmountProperties() {
    const response = await allAmountPropertiesService();
    const formattedPrice = response.data.price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    setCountProperties(response.data.countProperties);
    setPrice(formattedPrice);
  }

  async function allInactiveItems() {
    const response = await allInactiveItemsService();
    const formattedPriceInactive = response.data.amountInactive.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    setPriceInactive(formattedPriceInactive);
    setCountPropertiesInactive(response.data.countInactive);
  }


  async function allModifiedItems() {
    const response = await allModifiedItemsService();
    setModifiedItems(response.data.groupModifiedItems);
  }

  useEffect(() => {
    allAmountProperties();
    allInactiveItems();
    allModifiedItems();
  }, [])


  return (
    <HomeContainer>
      <Content>
        <CardHome icon={<MdOutlineAttachMoney />} display={"Valor do patrimonio"} displayMedium={price} />
        <CardHome icon={<MdOutlineSchool />} display={"Patrimonio cadastrado"} displayMedium={[countProperties]} />
        <CardHome icon={<MdOutlineAttachMoney />} display={"Patrimonio inativo"} displayMedium={priceInactive} />
      </Content>
      <HomeRow>
        <H2>Produtos inativos</H2>
        {countPropertiesInactive.length !== 0 ? (
          <ListView>
            {
              countPropertiesInactive.map((el, i) => <PropertyInactive key={i} {...el} />
              )
            }
          </ListView>) : (
          <ListView><h1>carregando...</h1></ListView>
        )
        }
      </HomeRow>
      <HomeRow>
        <H2>Ultimas alteracoes</H2>
        {modifiedItems.length !== 0 ? (
          <ListView>
            {
              modifiedItems.map((el, i) => <PropertyUpdate key={i} cod_id={el._id} name={el.total.name} register={el.total.array} />)
            }
          </ListView>) : (
          <ListView><h1>carregando...</h1></ListView>
        )
        }
      </HomeRow>
    </HomeContainer>
  );
}

export default Home;