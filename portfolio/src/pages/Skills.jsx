import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/home/MainSection";
import Navbar from "../components/Navbar";

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
      </MainSection>
    </>
  );
};

export default Skills;
