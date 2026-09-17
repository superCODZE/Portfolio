
import ProjectCard from './projectCard';

function ProjectSection() {
  return (
    <section className="projects-info">
      <div className="projects-header">
       <h1>My Projects</h1>
       <p>these are my projects</p>
      </div>
      <div className="projects-container">
        <ProjectCard title="Project 1" description="This is my first project" url="/images/project1.jpg" />
        <ProjectCard title="Project 2" description="This is my second project" url="/images/project2.jpg" />
        <ProjectCard title="Project 3" description="This is my third project" url="/images/project3.jpg" />
      </div>
    </section>
  );
}

export default ProjectSection;