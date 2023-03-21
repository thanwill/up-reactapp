import "./formulario.css";

function FormsLogin() {
  const image = "https://cdn-icons-png.flaticon.com/512/9995/9995237.png";
  return (
    <form className='form-login col-10 offset-1 col-md-4 offset-md-4 pt-5 pb-5'>
      <img className='mb-4' src={image} alt='' width='72' />
      <h1 className='h3 mb-3 fw-normal'>Faça login!</h1>
      <div className='form-floating'>
        <input
          type='email'
          className='form-control'
          id='floatingInput'
          placeholder='name@example.com'
        />
        <label for='floatingInput'>Seu e-mail</label>
      </div>
      <div className='form-floating'>
        <input
          type='password'
          className='form-control'
          id='floatingPassword'
          placeholder='Password'
        />
        <label for='floatingPassword'>Senha</label>
      </div>

      <div className='checkbox mb-3'>
        <label>
          <input type='checkbox' value='remember-me' /> Remember me
        </label>
      </div>
      <button className='w-100 btn btn-lg btn-primary' type='submit'>
        Sign in
      </button>
    </form>
  );
}
export default FormsLogin;
