import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/home/MainSection";
import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItem text="Home" link="/home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/Skills" icon="skills.svg" />
          <NavbarItemSelected
            text="Projects"
            link="/Projects"
            icon="projects.svg"
          />
        </Navbar>
      </MainSection>
    </>
  );
};

export default Projects;
