import ProjectsSection from "./ProjectsSection";
import Skills from "./SubsidiarySection";
import SubsidiarySection from "./SubsidiarySection";

const MainSection = ({ children}) => {
  return (
    <section className="main">
      {children}
      <div className="main__homepage">
        <SubsidiarySection>
          <ProjectsSection />
          <Skills />
        </SubsidiarySection>
      </div>
    </section>
  );
};

export default MainSection;
