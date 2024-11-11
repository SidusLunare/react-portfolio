import { Link } from "react-router-dom";

function SubsidiarySection({ children }) {
  return (
    <article className="subsidiary__section-primary">
      <h2 className="subsidiary__section-title">
        <Link to={link}>{title}</Link>
        {children}
      </h2>
      <div className="subsidiary__section-primary-skills">
        <Link to={link}>{title}</Link>
        {children}
      </div>
    </article>
  );
}

export default SubsidiarySection;
