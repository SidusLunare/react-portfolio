import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import SecondNavbar from "../components/projects/SecondNavbar";
import SecondNavbarButton from "../components/projects/SecondNavbarButton";
import projects from "../scripts/projects";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const Projects = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((project) => project.id == Number(id));
  // onClick={() => navigate(-1)}

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
          {projects.map((project) => (
            <SecondNavbarButton
              key={project.id}
              link={`${project.id}`}
              text={project.name}
            />
          ))}
        </SecondNavbar>
      </MainSection>
    </>
  );
};

export default Projects;
