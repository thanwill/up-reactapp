export default function Title({ title, text }) {
  return (

    <div className="col-10 offset-1 col-md-8 offset-md-2">
      <h1 className='mt-5 mb-5 text-left'>{title}</h1>
      <p className='mt-3 mb-5 text-left'>
        {text}
      </p>
    </div>
  );
}
