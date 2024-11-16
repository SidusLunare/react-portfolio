import ProjectsObject from "./ProjectsObject"

const ProjectsSection = () => {
  return (
    <article className="subsidiary__section-secondary">
      <div className="subsidiary__section-title">
        <h2>Projects</h2>
      </div>
      <section>
        <ProjectsObject text="Project Portfolio website"/>
        <ProjectsObject text="Project Ouderavond website"/>
        <ProjectsObject text="Project HTML & CSS leerweb" />
      </section>
    </article>
  );
};

export default ProjectsSection;
