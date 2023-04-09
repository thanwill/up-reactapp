import './style.css';
export default function Title({ title, text, classe }) {
  return (

    <div className="col-10 offset-1 col-md-10 offset-md-1 mt-5">
      <h1 className={classe} >{title}</h1>
      <p>
        {text}
      </p>
    </div>
  );
}
