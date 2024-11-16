import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import SkillsBoxObject from "../components/skills/SkillsBoxObject";
import SkillsBoxObjectSpecial from "../components/skills/SkillsBoxObjectSpecial";
import SkillsBoxSection from "../components/skills/SkillsBoxSection";
import skills from "../scripts/skills";

const Skills = () => {

  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItem text="Home" link="/home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItemSelected text="Skills" link="/skills" icon="skills.svg" />
          <NavbarItem text="Projects" link="/projects" icon="projects.svg" />
        </Navbar>
        <SkillsBoxSection>
          {skills.map(
            (skill) =>
              skill.special && (
                <SkillsBoxObjectSpecial
                  key={skill.id}
                  text={skill.text}
                  title={skill.title}
                  icon={skill.icon}
                  id={skill.id}
                  id_image={skill.id_image}
                />
              )
          )}
          {skills.map(
            (skill) =>
              !skill.special && (
                <SkillsBoxObject
                  key={skill.id}
                  text={skill.text}
                  title={skill.title}
                  icon={skill.icon}
                  id={skill.id}
                />
              )
          )}
        </SkillsBoxSection>
      </MainSection>
    </>
  );
};

export default Skills;
