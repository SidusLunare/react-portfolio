const Skills = () => {
  return (
    <>
      <Header />
      <Navbar>
        <NavbarItemSelected text="Home" link="/home" icon="home.svg" />
        <NavbarItem text="CV" link="/cv" icon="cv.svg" />
        <NavbarItem text="Skills" link="/Skills" icon="skills.svg" />
        <NavbarItem text="About me" link="/Aboutme" icon="aboutme.svg" />
      </Navbar>
    </>
  );
};

export default Skills;
