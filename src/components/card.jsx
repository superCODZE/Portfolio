

function Card({ title, description, imageUrl }) {
  return (
    <div className="card">
      <div className="card-title">
         <img src={imageUrl} alt={title} className="card-image" />
         <h2 >{title}</h2>
      </div>
      
      <div className="card-content">
         <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;