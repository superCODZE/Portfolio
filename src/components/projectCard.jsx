


function ProjectCard({ title, description, url }) {
  return (
    <>
    <div className="card-hover">
    <div className="card">
      <div className="card-title">
         <img src={url} alt={title} className="card-image" />
         <h3>{title}</h3>
      </div>
    
      <div className="card-content">
         <p className="card-description">{description}</p>
      </div>
    </div>
    </div>
    </>
  );
}

export default ProjectCard;