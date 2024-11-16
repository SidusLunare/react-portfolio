import NavbarItem from "../NavbarItem";
import NavbarItemSelected from "../NavbarItemSelected";
import Header from "../Header";
import Navbar from "../Navbar";
import MainSection from "../MainSection";
import SecondNavbar from "./SecondNavbar";
import SecondNavbarButton from "./SecondNavbarButton";
import SecondNavbarButtonSelected from "./SecondNavbarButtonSelected";
import MainText from "./MainText";
import MainTextArticle from "./MainTextArticle";
import { useNavigate, useLocation } from "react-router-dom";
import projects from "../../scripts/projects";

const Project_Test = () => {
  const navigate = useNavigate();

  function goToDetail() {
    navigate(`/products/project_${product.id}`);
  }

  const location = useLocation();

  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItem text="Home" link="/home" icon="/home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/skills" icon="skills.svg" />
          <NavbarItemSelected
            text="Projects"
            link="/projects"
            icon="projects.svg"
          />
        </Navbar>
        <SecondNavbar>
          {projects.map((project) =>
            location.pathname == project.url ? (
              <SecondNavbarButtonSelected
                key={project.id}
                link={`../projects/${project.id}`}
                text={project.name}
                onClick={goToDetail}
              />
            ) : (
              <SecondNavbarButton
                key={project.id}
                link={`../projects/${project.id}`}
                text={project.name}
                onClick={goToDetail}
              />
            )
          )}
        </SecondNavbar>
        {projects.map((project) =>
            location.pathname == project.url ? (
        <MainText key={project.id} project={project.name}>
          <MainTextArticle>
            <p className="main__article-infobox main__article-text"
            dangerouslySetInnerHTML={{ __html: project.info_text }}/>
          </MainTextArticle>
          <MainTextArticle>
            <h2 className="main__article-subtitle">Voorbereiding</h2>
            <p className="main__article-text">{project.preparation_text}</p>
          </MainTextArticle>
          <MainTextArticle>
            <h2 className="main__article-subtitle">Design</h2>
            <p className="main__article-text">{project.design_text}</p>
            <img
              className="main__article-img"
              src={`../img/${project.image}`}
              alt=""
            />
          </MainTextArticle>
        </MainText>
        ) : (
          <>
          </>
        )
        )}
      </MainSection>
    </>
  );
};

export default Project_Test;
