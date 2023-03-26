
function Planos() {
  
  return (
    <main className='conteudo'>
      <div className='row mt-5'>
        <h1 className="col-10 offset-1 pt-5">Conheça nossos planos</h1>
        <div className="col-10 offset-1 mt-3 pb-5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto odit temporibus pariatur nulla quibusdam expedita hic explicabo maiores voluptate, quisquam voluptatem ipsum doloremque! Praesentium nisi quisquam neque veritatis ratione.</p>
        </div>
        <div className='col-10 offset-1 col-md-3'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <div className='card-header py-3'>
              <h4 className='my-0 fw-normal'> Free </h4>{" "}
            </div>{" "}
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                $0 <small className='text-muted fw-light'> /mo</small>
              </h1>{" "}
              <ul className='list-unstyled mt-3 mb-4'>
                <li> 10 users included </li> <li> 2 GB of storage </li>{" "}
                <li> Email support </li> <li> Help center access </li>{" "}
              </ul>{" "}
              <button
                type='button'
                className='w-100 btn btn-lg btn-outline-primary'>
                Sign up for free{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className='col-10 offset-1 col-md-3'>
          <div className='card mb-4 rounded-3 shadow-sm'>
            <div className='card-header py-3'>
              <h4 className='my-0 fw-normal'> Pro </h4>{" "}
            </div>{" "}
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                $15{" "}
                <small small className='text-muted fw-light'>
                  {" "}
                  /mo
                </small>
              </h1>{" "}
              <ul className='list-unstyled mt-3 mb-4'>
                <li> 20 users included </li> <li> 10 GB of storage </li>{" "}
                <li> Priority email support </li> <li> Help center access </li>{" "}
              </ul>{" "}
              <button type='button' className='w-100 btn btn-lg btn-primary'>
                Get started{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
        <div className='col-10 offset-1 col-md-3'>
          <div className='card mb-4 rounded-3 shadow-sm border-primary'>
            <div className='card-header py-3 text-bg-primary border-primary'>
              <h4 className='my-0 fw-normal'> Enterprise </h4>{" "}
            </div>{" "}
            <div className='card-body'>
              <h1 className='card-title pricing-card-title'>
                $29{" "}
                <small small className='text-muted fw-light'>
                  {" "}
                  /mo
                </small>
              </h1>{" "}
              <ul className='list-unstyled mt-3 mb-4'>
                <li> 30 users included </li> <li> 15 GB of storage </li>{" "}
                <li> Phone and email support </li> <li> Help center access </li>{" "}
              </ul>{" "}
              <button type='button' className='w-100 btn btn-lg btn-primary'>
                Contact us{" "}
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
    </main>
  );
}

export default Planos;
