import React, { useState, useEffect } from "react";
import Title from "../Title";
import "./stepform.css";
import Cards from "react-credit-cards";

const StepForm = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({});
  const [street, setStreet] = useState("");
  const [district, setDistrict] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");
  const [payment, setPayment] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  const [cardFocus, setCardFocus] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  // Função para buscar o endereço no ViaCEP
  async function getAddress() {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (data.erro) {
        console.log("CEP não encontrado");
      } else {
        setAddress(data);
        setStreet(data.logradouro);
        setDistrict(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleCepChange(event) {
    setCep(event.target.value);
  }

  // Chama a função getAddress sempre que o valor do CEP mudar
  useEffect(() => {
    if (cep.length === 8) {
      getAddress();
    }
  }, [cep]);

  function isValidDate(dateString) {
    // Verifica se a data está no formato "mm/yyyy"
    if (!/^\d{2}\/\d{4}$/.test(dateString)) {
      return false;
    }

    // Separa o mês e o ano em variáveis separadas
    const [month, year] = dateString.split("/");

    // Verifica se o mês e o ano são válidos
    const now = new Date();
    const inputDate = new Date(year, parseInt(month, 10) - 1, 1);
    return inputDate > now;
  }
  function formatDateString(dateString) {
    // Remove todos os caracteres não numéricos
    let numericString = dateString.replace(/\D/g, "");

    // Adiciona a barra depois dos primeiros 2 dígitos (mês)
    if (numericString.length > 2) {
      numericString = numericString.slice(0, 2) + "/" + numericString.slice(2);
    }

    // Limita a string a 7 caracteres (mm/yyyy)
    numericString = numericString.slice(0, 7);

    return numericString;
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Envie os dados do formulário para o servidor aqui
    alert("Formulário enviado com sucesso!");
    console.log({
      name,
      company,
      email,
      phone,
      cep,
      street,
      district,
      city,
      state,
      number,
      complement,
      payment,
      cardNumber,
      cardName,
      cardDate,
      cardCvv,
    });
  };

  return (
    <div className='continer'>
      <div className='row'>
        <div className='col-10 offset-1 col-md-4 offset-md-4 pt-5 pb-5'>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <fieldset>
                <Title
                  title={"Dados pessoais"}
                  text={"Queremos te conhecer melhor."}
                />
                <input
                  type='text'
                  onChange={e => setName(e.target.value)}
                  placeholder='Nome'
                />
                <input
                  type='text'
                  onChange={e => setCompany(e.target.value)}
                  placeholder='Sobrenome'
                />
                <input
                  type='text'
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Email'
                />
                <input
                  type='text'
                  onChange={e => setPhone(e.target.value)}
                  placeholder='Telefone'
                />

                <button type='button' onClick={handleNextStep}>
                  Próximo
                </button>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <Title
                  title={"Informe seu CEP"}
                  text={"Válido para território nacional."}
                />

                <input
                  type='text'
                  value={cep}
                  placeholder='CEP'
                  onChange={handleCepChange}
                />

                {cep.length === 8 && (
                  <>
                    <input
                      type='text'
                      onChange={e => setStreet(e.target.value)}
                      value={address.logradouro || ""}
                      placeholder='Logradouro'
                    />
                    <input
                      type='text'
                      placeholder='Número'
                      onChange={e => setNumber(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.bairro || ""}
                      placeholder='Bairro'
                      onChange={e => setDistrict(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.localidade || ""}
                      placeholder='Cidade'
                      onChange={e => setCity(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.uf || ""}
                      placeholder='Estado'
                      onChange={e => setState(e.target.value)}
                    />

                    <input
                      type='text'
                      placeholder='Complemento'
                      onChange={e => setComplement(e.target.value)}
                    />
                  </>
                )}

                <button type='button' onClick={handlePreviousStep}>
                  Voltar
                </button>
                <button type='button' onClick={handleNextStep}>
                  Próximo
                </button>
              </fieldset>
            )}

            {step === 3 && (
              <>
                <Title
                  title={"Forma de pagamento"}
                  text={"Informe os dados do cartão."}
                />

                <div className='mt-5 mb-5'>
                  <Cards
                    cvc={cardCvv}
                    expiry={cardDate}
                    name={cardName}
                    number={cardNumber}
                    focused={cardFocus}
                  />
                </div>
                <fieldset>
                  <input
                    type='text'
                    placeholder='Nome no cartão'
                    onChange={e => setCardName(e.target.value)}
                    onFocus={e => setCardFocus(e.target.name)}
                  />
                  <input
                    type='number'
                    placeholder='Número do cartão'
                    onChange={e => setCardNumber(e.target.value)}
                    onFocus={e => setCardFocus(e.target.name)}
                    maxLength={16}
                    minLength={16}
                  />
                  <input
                    type='text'
                    placeholder='01/2020'
                    onChange={e =>
                      setCardDate(formatDateString(e.target.value))
                    }
                    onFocus={e => setCardFocus(e.target.name)}
                    onBlur={e => {
                      if (!isValidDate(e.target.value)) {
                        setCardDate("");
                      }
                    }}
                    maxLength={7}
                  />

                  <select onChange={e => setPayment(e.target.value)}>
                    <option value='credit'>Crédito</option>
                    <option value='debit'>Débito</option>
                  </select>

                  <input
                    type='password'
                    placeholder='CVV'
                    onChange={e => setCardCvv(e.target.value)}
                    onFocus={e => setCardFocus(e.target.name)}
                    // oculta o setCardCvv
                    maxLength={3}
                  />

                  <button type='button' onClick={handlePreviousStep}>
                    Voltar
                  </button>
                  <button type='button' onClick={handleNextStep}>
                    Próximo
                  </button>
                </fieldset>
              </>
            )}

            {step === 4 && (
              <fieldset>
                <Title
                  title={"Pronto!"}
                  text={"Aqui vai um resumo dos seus dados."}
                />

                <p>Nome: {name}</p>
                <p>Sobrenome: {company}</p>
                <p>Email: {email}</p>
                <p>Telefone: {phone}</p>

                <Title
                  title={"Endereço"}
                  text={"Este foi seu endereço cadastrado."}
                />
                <p>CEP: {cep}</p>
                <p>Logradouro: {street}</p>
                <p>Número: {number}</p>
                <p>Bairro: {district}</p>
                <p>Cidade: {city}</p>
                <p>Estado: {state}</p>
                <p>Complemento: {complement}</p>

                <Title title={"Faturamento"} classe={"mt-5 mb-5"} />

                <div className='text-left'>
                  <p>Nome no cartão: {cardName}</p>
                  <p>Número do cartão: {cardNumber}</p>
                  <p>Validade: {cardDate}</p>
                  <p>CVV: {cardCvv}</p>
                </div>

                <button type='button' onClick={handlePreviousStep}>
                  Voltar
                </button>
                <button type='submit'>Enviar</button>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
