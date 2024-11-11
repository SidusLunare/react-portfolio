import {Link} from 'react-router-dom'

const NavbarItemSelected = ({ text, icon, link }) => {
  return (
    <Link className="navbar__button navbar__section-button--active" to={link}>
      <img className="navbar__button-img" src={`./img/svg/blue/${icon}`} alt={text} />
      <div className="navbar__button-selected">
        <h2 className="navbar__button-text">{text}</h2>
        <img className="navbar__button-selected--desktop" src="./img/svg/horizontal.svg" alt="Selected icon" />
      </div>
    </Link>
  );
};

export default NavbarItemSelected;
