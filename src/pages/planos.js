import "../global.css";
import Title from "../components/Title";
function Planos() {
  return (
    <main className='conteudo'>
      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <div className="m-5">
          <Title title={"Conheça nossos planos"} classe={'text-center mb-5'}/> 
          </div>
          <div className='row'>
            <div className=' col-10 offset-1 col-md-3'>
              <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-header py-3'>
                  <h4 className='my-0 fw-normal'> Free </h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title pricing-card-title'>
                    $0 <small className='text-muted fw-light'> /mês</small>
                  </h1>
                  <ul className='list-unstyled mt-3 mb-4'>
                    <li> 1 usuário incluso </li> <li> 2 GB para download </li>
                    <li> streaming padrão </li>{" "}
                    <li> Legendas em vários idiomas </li>
                  </ul>
                  <button
                    type='button'
                    className='w-100 btn btn-lg btn-outline-primary'>
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className='col-10 offset-1 col-md-3'>
              <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-header py-3'>
                  <h4 className='my-0 fw-normal'> Pro </h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title pricing-card-title'>
                    $15
                    <small small className='text-muted fw-light'>
                      /mês
                    </small>
                  </h1>
                  <ul className='list-unstyled mt-3 mb-4'>
                    <li> 3 usuários inclusos </li>{" "}
                    <li> 10 GB para download </li>
                    <li> Streaming em alta definição </li>{" "}
                    <li> Áudio surround 5.1</li>
                  </ul>
                  <button
                    type='button'
                    className='w-100 btn btn-lg btn-primary'>
                    Get started
                  </button>
                </div>
              </div>
            </div>
            <div className='col-10 offset-1 col-md-3'>
              <div className='card mb-4 rounded-3 shadow-sm border-primary'>
                <div className='card-header py-3 text-bg-primary border-primary'>
                  <h4 className='my-0 fw-normal'> Família </h4>
                </div>
                <div className='card-body'>
                  <h1 className='card-title pricing-card-title'>
                    $29
                    <small small className='text-muted fw-light'>
                      /mês
                    </small>
                  </h1>
                  <ul className='list-unstyled mt-3 mb-4'>
                    <li> até 5 perfis de usuário </li>{" "}
                    <li> Download ilimitado </li>
                    <li> Diferentes telas </li>
                  </ul>
                  <button
                    type='button'
                    className='w-100 btn btn-lg btn-primary'>
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Title
          text={
            "Ao assinar nosso site de filmes, você terá acesso ilimitado a uma ampla variedade de filmes e séries de sucesso, de diferentes gêneros e épocas, com opções para toda a família. Além disso, atualizamos regularmente nossa biblioteca de conteúdo para garantir que você sempre tenha novidades para assistir. Não perca mais tempo procurando por entretenimento de qualidade, assine agora e desfrute de uma experiência cinematográfica incomparável!"
          }
        />
      </div>
    </main>
  );
}

export default Planos;
