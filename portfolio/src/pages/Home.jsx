import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/home/MainSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/home/ProjectsSection";
import SkillsSection from "../components/home/SkillsSection";
import SkillsObject from "../components/home/SkillsObject";
import SubsidiarySection from "../components/home/SubsidiarySection";
import HomepageProfile from "../components/home/HomepageProfile";

const Home = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItemSelected text="Home" link="/Home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/Skills" icon="skills.svg" />
          <NavbarItem text="Projects" link="/Projects" icon="projects.svg" />
        </Navbar>
        <div className="main__homepage">
          <HomepageProfile />
          <SubsidiarySection>
            <SkillsSection>
              <SkillsObject image="javascript.png" />
              <SkillsObject image="html.png" />
              <SkillsObject image="css.png" />
              <SkillsObject image="react.png" />
              <SkillsObject image="csharp.png" />
            </SkillsSection>
            <ProjectsSection />
          </SubsidiarySection>
        </div>
      </MainSection>
    </>
  );
};

export default Home;
