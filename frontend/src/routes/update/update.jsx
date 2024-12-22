import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateService from "../../services/update.service";
import { Container } from "../../styles/global";
import { FormContent, Input, InputContainer, InputContent, InputRadio, InputReset, InputSubmit, Label, TextArea } from "../form/style";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cod_id = Number(document.getElementById("cod_id").value);
    const name = document.getElementById("name").value;
    const location = document.getElementById("location").value;
    const number_class = document.getElementById("number_class").value;
    const process = document.getElementById("process").value;
    const description = document.getElementById("description").value;
    const statusAtivo = document.getElementById("status_ativo");
    const statusInativo = document.getElementById("status_inativo");
    const model = document.getElementById("model").value;
    const brand = document.getElementById("brand").value;
    const date = document.getElementById("date").value;
    const price = document.getElementById("price").value;
    let status = "ativo";

    if (!statusAtivo.checked) {
      status = statusInativo.value;
    } else {
      status = statusAtivo.value;
    }

    // Comparar os valores originais com os novos valores
    const originalData = {
      cod_id: data.cod_id,
      name: data.name,
      price: data.price,
      location: data.location,
      number_class: data.number_class,
      process: data.process,
      status: data.status,
      description: data.description,
      model: data.model,
      brand: data.brand,
      date: data.date,
    };
    const Price = price.replace(/[R$\s.]/g, "").replace(",", ".");
    const priceFloat = parseFloat(Price);
    const updatedData = {
      cod_id,
      name,
      price: priceFloat,
      location,
      number_class,
      process,
      status,
      description,
      model,
      brand,
      date,
    };

    const updatedFields = {};

    for (const key in updatedData) {
      if (updatedData[key] !== originalData[key]) {
        updatedFields[key] = updatedData[key];
      }
    }
    console.log(updatedFields)
    try {
      const property = await axios.patch(`https://monitoria-fb90.onrender.com/list/${id}`, updatedFields);
      console.log("foi", property);
    } catch (error) {
      console.error("Erro ao criar a propriedade:", error);
    }
  };

  async function Update() {
    const res = await UpdateService(id);
    setData(res.data);
  }

  useEffect(() => {
    Update();
  }, [])

  const handleNumberInput = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^\d.]/g, "");
    e.target.value = inputValue;
  };

  const handleBlur = (e) => {
    const inputValue = e.target.value;

    const parsedValue = parseFloat(inputValue.replace(",", "."));

    if (!isNaN(parsedValue)) {
      const formattedValue = parsedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

      e.target.value = formattedValue;
    }
  };


  const handleDateInput = (e) => {
    const inputValue = e.target.value;
    const formattedValue = inputValue
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");

    e.target.value = formattedValue;
  }

  console.log(data)
  useEffect(() => {
    const formatPrice = (value) => {
      return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    };

    // Seleciona o input e define seu valor formatado
    const inputPrice = document.getElementById('price');
    if (inputPrice) {
      const numericValue = 1234.56; // Valor numérico em formato de ponto flutuante
      inputPrice.value = formatPrice(numericValue);
    }
  }, []);

  return (
    <Container>
      <FormContent id="form" onSubmit={handleSubmit}>
        <InputContainer>
          <InputContent>
            <Label htmlFor="cod_id">Cod. Patrimonio <span>*</span></Label>
            <Input name="cod_id" id="cod_id" type="Text" disabled defaultValue={data.cod_id} maxLength={7}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="name">Nome do Bem <span>*</span></Label>
            <Input name="name" id="name" type="Text" defaultValue={data.name}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="price">Valor do Bem <span>*</span></Label>
            <Input name="price" id="price" type="Text" onBlur={handleBlur} onChange={handleNumberInput} defaultValue={data.price}></Input>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="brand">Marca <span>*</span></Label>
            <Input name="brand" id="brand" type="Text" defaultValue={data.brand}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="model">Modelo <span>*</span></Label>
            <Input name="model" id="model" type="Text" defaultValue={data.model}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="date">Data <span>*</span></Label>
            <Input name="date" id="date" type="Text" onInput={handleDateInput} maxLength={8} defaultValue={data.date}></Input>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="process">Processo <span>*</span></Label>
            <Input name="process" id="process" type="Text" defaultValue={data.process}></Input>
          </InputContent>

          <InputContent>
            <Label htmlFor="location">Localização </Label>
            <Input name="location" id="location" type="Text" defaultValue={data.location}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="number_class">Número da sala </Label>
            <Input name="number_class" id="number_class" type="Text" defaultValue={data.number_class}></Input>
          </InputContent>
          <InputContent>
            <Label>Condição <span>*</span></Label>
            <InputRadio>
              <Label htmlFor="status">
                Ativo
                <Input type="radio" name="status" id="status_ativo" defaultValue={"ativo"}></Input>
              </Label>
              <Label htmlFor="status">
                Inativo
                <Input type="radio" name="status" id="status_inativo" defaultValue={"inativo"}></Input>
              </Label>
            </InputRadio>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="description">Descrição do bem <span>*</span></Label>
            <TextArea name="description" id="description" cols="30" rows="10" value={data.description}></TextArea>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputSubmit type="submit" value="Enviar" />
          <InputReset type="reset" value="Apagar" />
        </InputContainer>

      </FormContent>

    </Container >
  )
}

export default Update;
