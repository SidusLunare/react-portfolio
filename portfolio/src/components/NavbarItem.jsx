import {Link} from 'react-router-dom'

const NavbarItem = ({ text, link, icon }) => {
  return (
    <Link className="navbar__button navbar__section-button--active" to={link}>
      <img className="navbar__button-img" src={`./img/svg/${icon}`} alt={text} />
      <h2 className="navbar__button-text">{text}</h2>
    </Link>
  );
};

export default NavbarItem;
