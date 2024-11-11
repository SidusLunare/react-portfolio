import NavbarItem from "../components/NavbarItem";
import NavbarItemSelected from "../components/NavbarItemSelected";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";

const Home = () => {
  const ActivateOverlay = () => {
    aboutmeOverlay.classList.add("aboutme__overlay--active");
    aboutmeOverlay.classList.remove("aboutme__overlay--inactive");
  };

  const DeactivateOverlay = () => {
    aboutmeOverlay.classList.add("aboutme__overlay--inactive");
    aboutmeOverlay.classList.remove("aboutme__overlay--active");
  };

  return (
    <>
      <Header />
      <MainSection>
        <Navbar>
          <NavbarItemSelected text="Home" link="/Home" icon="home.svg" />
          <NavbarItem text="CV" link="/cv" icon="cv.svg" />
          <NavbarItem text="Skills" link="/Skills" icon="skills.svg" />
          <NavbarItem text="About me" link="/Aboutme" icon="aboutme.svg" />
        </Navbar>
      </MainSection>
    </>
  );
};

export default Home;
