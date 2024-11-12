import { Link } from "react-router-dom";


const SkillsSection = ({ children, link, title }) => {
  return (
    <article className="subsidiary__section-primary">
      <h2 className="subsidiary__section-title">
        <Link to={link}>{title}</Link>
      </h2>
      <div className="subsidiary__section-primary-skills">
        {children}
      </div>
    </article>
  );
};

export default SkillsSection;
