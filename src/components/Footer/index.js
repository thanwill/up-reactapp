import { useLocation } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  const data = new Date();
  const location = useLocation();

  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top navbar-fixed-bottom'>
      <div className='col-md-4 d-flex align-items-center'>
        <a
          href='/'
          className='mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1'>
          <svg className='bi' width='30' height='24'></svg>
        </a>
        <span className='mb-3 mb-md-0 text-muted'>
          {data.getFullYear()} - Jonathan Pereira <br />
          Feito com React!
        </span>
      </div>
      <ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://wa.me/5541987233861'>
            <i class='bi bi-whatsapp'></i>
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://www.linkedin.com/in/jonathanwillian/'>
            <i class='bi bi-linkedin'></i>
          </a>
        </li>
        <li className='ms-3'>
          <a
            className='text-muted'
            target='blank'
            href='https://twitter.com/JONATHANWILLlAN'>
            <i class='bi bi-twitter'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
