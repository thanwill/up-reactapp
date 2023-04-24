import React, { useState, useEffect } from "react";

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
  const [country, setCountry] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    async function fetchAddress() {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      setAddress(data);
    }

    if (cep.length === 8) {
      fetchAddress();
      console.log(address);
    }
  }, [cep]);

  function handleCepChange(event) {
    setCep(event.target.value.replace(/\D/g, ""));
  }

  const handleSubmit = event => {
    event.preventDefault();
    // Envie os dados do formulário para o servidor aqui
    alert("Formulário enviado com sucesso!");
  };

  return (
    <div className='continer'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 mt-5'>
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <fieldset>
                <h2 className='mb-4'>Dados pessoais</h2>
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
                  Next
                </button>
              </fieldset>
            )}

            {step === 2 && (
              <fieldset>
                <h2>Seu plano</h2>
                <h3>Defina a melhor opção para vocês.</h3>

                <select>
                  <option selected='selected' disabled>
                    Plano
                  </option>
                  <option value={"free"}>Free</option>
                  <option value={"pro"}>Pro</option>
                  <option value={"familia"}>Família</option>
                </select>

                <select>
                  <option selected='selected' disabled>
                    Pagamento
                  </option>
                  <option value={"pix"}>PIX</option>
                  <option value={"debito"}>Débito</option>
                  <option value={"credito"}>Crédito</option>
                  <option value={"desconto"}>Cupom</option>
                </select>

                <select>
                  <option selected='selected' disabled>
                    Dispositivos
                  </option>
                  <option value={"1"}>1 dispositivo</option>
                  <option value={"2"}>2 dispositivos</option>
                  <option value={"3"}>Sem restrições</option>
                </select>

                <button type='button' onClick={handlePreviousStep}>
                  Previous
                </button>

                <button type='button' onClick={handleNextStep}>
                  Next
                </button>
              </fieldset>
            )}

            {step === 3 && (
              <fieldset>
                <h2>Seu endereço</h2>
                <h3>Informe seu CEP.</h3>

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
                      value={address.logradouro}
                      placeholder='Logradouro'
                      onChange={e => setStreet(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='Número'
                      onChange={e => setNumber(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.bairro}
                      placeholder='Bairro'
                      onChange={e => setDistrict(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.localidade}
                      placeholder='Cidade'
                      onChange={e => setCity(e.target.value)}
                    />
                    <input
                      type='text'
                      value={address.uf}
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
                  Previous
                </button>
                <button type='button' onClick={handleNextStep}>
                  Next
                </button>
              </fieldset>
            )}

            {step === 4 && (
              <fieldset>
                <h2>Confirmação</h2>
                <h3>Confirme seus dados.</h3>

                <p>Nome: {name}</p>
                <p>Sobrenome: {company}</p>
                <p>Email: {email}</p>
                <p>Telefone: {phone}</p>
                <p>CEP: {cep}</p>
                <p>Logradouro: {street}</p>
                <p>Número: {number}</p>
                <p>Bairro: {district}</p>
                <p>Cidade: {city}</p>
                <p>Estado: {state}</p>
                <p>País: {country}</p>
                <p>Complemento: {complement}</p>

                <button type='button' onClick={handlePreviousStep}>
                  Previous
                </button>
                <button type='submit'>Submit</button>
              </fieldset>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StepForm;
