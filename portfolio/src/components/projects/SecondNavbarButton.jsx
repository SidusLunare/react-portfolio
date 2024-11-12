import { Link } from "react-router-dom";

const SecondNavbarButton = ({ link, text }) => {
  return (
    <Link className="secondnavbar__button" to={link}>
      <h3 className="secondnavbar__button-text">{text}</h3>
    </Link>
  );
};

export default SecondNavbarButton;
