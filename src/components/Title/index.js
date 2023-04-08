import './style.css';
export default function Title({ title, text }) {
  return (

    <div className="col-10 offset-1 col-md-10 offset-md-1 m-5">
      <h1 className='text-center'>{title}</h1>
      <p>
        {text}
      </p>
    </div>
  );
}
