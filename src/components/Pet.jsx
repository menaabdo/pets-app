import { Link } from "react-router-dom";
const Pet = (props) => {
  return (
    <Link to={`/details/${props.id}`} className="pet">
      <div className="image-container">
        <img src={props.img[0]} alt={props.name} />
      </div>
      <div className="info">
        <h1>{props.name}</h1>
        <h2>{props.animal}</h2>
        <h2>{props.breed}</h2>
      </div>
    </Link>
  );
};

export default Pet;
