import axios from "axios";
import { Label, Input, InputContainer, InputContent, TextArea, InputSubmit, InputReset, Modal, FormContent, InputRadio } from "./style";
import { useState } from "react";
import { BsFillPatchCheckFill } from "react-icons/bs"
import { Container } from "../../styles/global";


export default function Form() {

  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const cod_id = document.getElementById("cod_id").value;
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
      status = statusInativo.value
    } else {
      status = statusAtivo.value
    }

    const Price = price.replace(/[R$\s.]/g, "")
      .replace(",", ".");

    const priceFloat = parseFloat(Price);

    const data = {
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

    try {
      const property = await axios.post("https://monitoria-fb90.onrender.com/register", data);
      console.log(property)
      setShowModal(true);
    } catch (error) {
      console.error("Erro ao criar a propriedade:", error);
    }
  }

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

  return (

    <Container>
      {showModal && (
        <Modal>
          <div className="modal-content">
            <BsFillPatchCheckFill />
            <h2>Cadastro bem-sucedido!</h2>
            <p>Seu cadastro foi realizado com sucesso.</p>
            <button onClick={() => setShowModal(false)}>Fechar</button>
          </div>
        </Modal>
      )}
      <FormContent id="form" onSubmit={handleSubmit}>
        <InputContainer>
          <InputContent>
            <Label htmlFor="cod_id">Cod. Patrimonio <span>*</span></Label>
            <Input name="cod_id" id="cod_id" type="Text" onChange={handleNumberInput} maxLength={7}></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="name">Nome do Bem <span>*</span></Label>
            <Input name="name" id="name" type="Text"></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="price">Valor do Bem <span>*</span></Label>
            <Input name="price" id="price" type="Text" onBlur={handleBlur} onChange={handleNumberInput}></Input>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="brand">Marca <span>*</span></Label>
            <Input name="brand" id="brand" type="Text"></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="model">Modelo <span>*</span></Label>
            <Input name="model" id="model" type="Text"></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="date">Data <span>*</span></Label>
            <Input name="date" id="date" type="Text" onInput={handleDateInput} maxLength={8}></Input>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="process">Processo <span>*</span></Label>
            <Input name="process" id="process" type="Text"></Input>
          </InputContent>

          <InputContent>
            <Label htmlFor="location">Localização </Label>
            <Input name="location" id="location" type="Text"></Input>
          </InputContent>
          <InputContent>
            <Label htmlFor="number_class">Número da sala </Label>
            <Input name="number_class" id="number_class" type="Text"></Input>
          </InputContent>
          <InputContent>
            <Label>Condição <span>*</span></Label>
            <InputRadio>
              <Label htmlFor="status">
                Ativo
                <Input type="radio" name="status" id="status_ativo" value={"ativo"}></Input>
              </Label>
              <Label htmlFor="status">
                Inativo
                <Input type="radio" name="status" id="status_inativo" value={"inativo"}></Input>
              </Label>
            </InputRadio>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputContent>
            <Label htmlFor="description">Descrição do bem <span>*</span></Label>
            <TextArea name="description" id="description" cols="30" rows="10"></TextArea>
          </InputContent>
        </InputContainer>

        <InputContainer>
          <InputSubmit type="submit" value="Enviar" />
          <InputReset type="reset" value="Apagar" />
        </InputContainer>

      </FormContent>
    </Container>
  );
}
