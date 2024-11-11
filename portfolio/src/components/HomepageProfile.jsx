
const HomepageProfile = () => {
  return (
    <section className="main__homepage-section">
      <article className="main__homepage-profile">
        <div className="main__homepage-profile-banner main__homepage-profile-banner--default"></div>
        <div className="main__homepage-profile-image main__homepage-profile-image--default"></div>
        <div className="main__homepage-profile-text">
          <div className="main__homepage-profile-text--together">
            <h2>Nova van der Vegt</h2>
            <h5 className="font-300">Frontend Web Developer</h5>
          </div>
          <div className="aboutme__button" id="aboutme__overlay-button">
            <h4>About me.</h4>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomepageProfile;
