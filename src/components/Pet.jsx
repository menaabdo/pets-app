const Pet = (props) => {
  return (
    <a href={`/details/`} className="pet">
      <div className="image-container">
        <img src={props.img[0]} alt={props.name} />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    </a>
  );
};

export default Pet;
