import './style.css';
export default function Title({ title, text, classe }) {
  return (

    <div className="">
      <h1 className={classe} >{title}</h1>
      <p>
        {text}
      </p>
    </div>
  );
}
