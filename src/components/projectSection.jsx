
import ProjectCard from './projectCard';

function ProjectSection() {
  return (
    <section id="projects" className="projects-info">
      <div className="projects-header">
       <h1>My Projects</h1>
       <p>
         These are my projects. If you want to see more, check my
         <a
           className="cursor-target github-profile-link"
           href="https://github.com/superCODZE"
           target="_blank"
           rel="noopener noreferrer"
         >
           GitHub profile
         </a>
       </p>
      </div>
      <div className="projects-container">
        <ProjectCard
          title="Library manager"
          description="A web application for managing books, users, and borrow records with a clean interface."
          url="Libraries.jpeg"
          repo_url="https://github.com/superCODZE/Library_manager"
        
        />
        <ProjectCard
          title="Parts properties detector"
          description="A smart tool that helps identify and classify vehicle components from incoming data."
          url="auto parts.jpeg"
          repo_url="https://github.com/superCODZE/Part-properties-detector"
        
        />
        <ProjectCard
          title="HTTP server"
          description="A simple HTTP server implemented in golang."
          url="http.jpeg"
          repo_url="https://github.com/superCODZE/Go_server"
        />
      </div>
    </section>
  );
}

export default ProjectSection;