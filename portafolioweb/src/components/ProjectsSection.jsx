import projects from '../data/projects';

function ProjectsSection() {
  return (
    <section>
      <h2>Proyectos</h2>
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>
            <strong>Tecnologías:</strong> {project.technologies.join(', ')}
          </p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Ver en GitHub
          </a>
        </div>
      ))}
    </section>
  );
}

export default ProjectsSection;