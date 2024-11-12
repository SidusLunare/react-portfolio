
const SecondNavbar = ( {children}) => {
  return (
    <nav className="secondnavbar front">
      <section className="secondnavbar__section">
        {children}
        <div className="secondnavbar__button">
          <h3 className="secondnavbar__button-text">Opname Kunstmin (WIP)</h3>
        </div>
        <div className="secondnavbar__button">
          <h3 className="secondnavbar__button-text">Techniek HGT (WIP)</h3>
        </div>
      </section>
    </nav>
  );
};

export default SecondNavbar;
