import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/home/MainSection";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/projects/SecondNavbar";
import SecondNavbarButton from "../components/projects/SecondNavbarButton";

const Projects = () => {
  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItem text="Home" link="/home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/skills" icon="skills.svg" />
          <NavbarItemSelected
            text="Projects"
            link="/projects"
            icon="projects.svg"
          />
        </Navbar>
        <SecondNavbar>
          <SecondNavbarButton link={"project_ouderavond"} text={"Ouderavond website"} />
          <SecondNavbarButton link={"project_leersite"} text={"HTML & CSS leerweb"} />
          <SecondNavbarButton link={"project_portfolio"} text={"Portfolio website"} />
          <SecondNavbarButton link={"project_gamesite"} text={"Game website"} />
          <SecondNavbarButton link={"project_donatetoplay"} text={"Donate to Play"} />
        </SecondNavbar>
      </MainSection>
    </>
  );
};




export default Projects;
