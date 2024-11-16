const SkillsBoxObject = ({ text, title, icon }) => {
  return (
    <article className="skillsbox__section__article">
      <div className="skillsbox__section__article_box">
        <div className="skillsbox__section__article__title">
            <img
              className="skillsbox__section__article__image"
              src={`../img/skills/${icon}`}
              alt="Missing Picture"
            />
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default SkillsBoxObject;
