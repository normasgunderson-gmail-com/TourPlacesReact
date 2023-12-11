const Card = ({title, image, desc}) => {
  // const {title, image, desc } = props
  return (
    <div className="card">
      <div className="title">
        <h1>{title}</h1>
        </div>
        <img src={image} alt="city"/>
      <div className="desc">
        <p>{desc}</p>
      </div>
      </div>
  );
};

export default Card;