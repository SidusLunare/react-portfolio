const SkillsBoxObjectSpecial = ({ text, title, icon, id , id_image}) => {
  return (
    <article className="skillsbox__section__article">
      <div className="skillsbox__section__article_box">
        <div className="skillsbox__section__article__title">
          <div className={`skillsbox__section__article__special_${id}`}>
            <img
              className={`skillsbox__section__article__image__special_${id_image}`}
              src={`../img/skills/${icon}`}
              alt=""
            />
          </div>
          <h1>{title}</h1>
        </div>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default SkillsBoxObjectSpecial;
