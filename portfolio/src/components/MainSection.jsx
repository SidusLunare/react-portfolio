import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection"
import SkillsObject from "./SkillsObject"
import SubsidiarySection from "./SubsidiarySection";
import HomepageProfile from "./HomepageProfile"

const MainSection = ({ children}) => {
  return (
    <section className="main">
      {children}
      <div className="main__homepage">
        <HomepageProfile/>
        <SubsidiarySection>
          <SkillsSection>
      <SkillsObject image="javascript.png"/>
      <SkillsObject image="html.png"/>
      <SkillsObject image="css.png"/>
      <SkillsObject image="react.png"/>
      <SkillsObject image="c#.png"/>
      <SkillsObject image=".png"/>
          </SkillsSection>
          <ProjectsSection />
        </SubsidiarySection>
      </div>
    </section>
  );
};

export default MainSection;
