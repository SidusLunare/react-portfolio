import { Link } from "react-router-dom";

const SecondNavbarButtonSelected = ({ link, text }) => {
  return (
    <Link className="secondnavbar__button" to={link}>
      <div className="navbar__button-selected">
        <h3 className="secondnavbar__button-text">{text}</h3>
        <img className="navbar__button-selected--desktop" src="../img/svg/horizontal.svg" alt=""/>
      </div>
    </Link>
  );
};

export default SecondNavbarButtonSelected;
