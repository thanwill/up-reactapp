import { React, useState } from "react";
import ErrorBoundary from '../components/ErrorBoundary/index';
import ChatRoom from '../components/ChatRoom/index';
import JsonPost from '../components/ChatRoom/JsonPost';

function Cadastro() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
      });

    function handleChange(event) {
        setUser({
            ...user,
            [event.target.name]: event.target.value 
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newUser = {
            name: user.name,
            email: user.email,
            password: user.password
        }

        if (newUser.name === "" || newUser.email === "" || newUser.password === "") {
            alert("Preencha todos os campos");
            return;
        }

        console.log(newUser)
    }

  return (
    <ErrorBoundary>
        <form className='form-login col-10 offset-1 col-md-4 offset-md-4 pt-5 pb-5'>
      <img className='mb-4' alt='' width='72' />
      <h1 className='h3 mb-3 fw-normal'>Faça seu cadastro!</h1>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='floatingInput'
          placeholder='Nome completo'
          name="name"
            value={user.name}
            onChange={handleChange}
        />
        <label for='floatingInput'>Seu nome</label>
      </div>


      <div className='form-floating'>
        <input
          type='email'
          className='form-control'
          id='floatingInput'
          placeholder='name@example.com'
            name="email"
            value={user.email}
            onChange={handleChange}

        />
        <label for='floatingInput'>Seu e-mail</label>
      </div>
      <div className='form-floating'>
        <input
          type='password'
          className='form-control'
          id='floatingPassword'
          placeholder='Password'
            name="password"
            value={user.password}
            onChange={handleChange}
        />
        <label for='floatingPassword'>Senha</label>
      </div>


      <button className='w-100 btn btn-lg btn-primary' type='submit' onSubmit={handleSubmit} >
        Cadastrar
      </button>
        </form>
        
        <hr />

        <ChatRoom/>
        <JsonPost/>
    </ErrorBoundary>
  );
}
export default Cadastro;
