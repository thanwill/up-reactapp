const data = new Date();
export default function Footer() {
  

  return (
    <footer class='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar-fixed-bottom'>
        <div class='col-md-4 d-flex align-items-center'>
          <a
            href='/'
            class='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
            <svg class='bi' width='30' height='24'></svg>
          </a>
          <span class='mb-3 mb-md-0 text-muted'>
            {data.getFullYear()} - Jonathan Pereira <br />
            Feito com ☕️, usando React!
          </span>
        </div>

        <ul class='nav col-md-4 justify-content-end list-unstyled d-flex'>
          <li class='ms-3'>
            <a class='text-muted' href=' '>
              <svg class='bi' width='24' height='24'>
                <use xlinkHref=''></use>
              </svg>
            </a>
          </li>
          <li class='ms-3'>
            <a class='text-muted' href=' '>
              <svg class='bi' width='24' height='24'>
                <use xlinkHref='#instagram'></use>
              </svg>
            </a>
          </li>
          <li class='ms-3'>
            <a class='text-muted' href=' '>
              <svg class='bi' width='24' height='24'>
                <use xlinkHref='#facebook'></use>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
  );
}
