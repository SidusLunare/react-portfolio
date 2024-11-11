
const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar">
        <section className="navbar__section">{children}</section>
      </nav>
    </>
  );
};

export default Navbar;
