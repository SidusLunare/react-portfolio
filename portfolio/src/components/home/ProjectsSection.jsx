import ProjectsObject from "./ProjectsObject"

const ProjectsSection = () => {
  return (
    <article className="subsidiary__section-secondary">
      <div className="subsidiary__section-title">
        <h2>Projects</h2>
      </div>
      <section>
        <ProjectsObject/>
        <div className="project__individual">
          <h3>Project Ouderavond website</h3>
        </div>
        <div className="project__individual">
          <h3>Project HTML & CSS leerweb</h3>
        </div>
        <ProjectsObject />
      </section>
    </article>
  );
};

export default ProjectsSection;
