import AboutMeOverlay from "./AboutMeOverlay";
import { useRef } from "react";

const HomepageProfile = () => {
  const elementRef = useRef(null);

  const ActivateOverlay = () => {
    if (elementRef.current) {
      elementRef.current.classList.add("aboutme__overlay--active");
      elementRef.current.classList.remove("aboutme__overlay--inactive");
      console.log("activate");
    }
  };

  const DeactivateOverlay = () => {
    if (elementRef.current) {
      elementRef.current.classList.add("aboutme__overlay--inactive");
      elementRef.current.classList.remove("aboutme__overlay--active");
      console.log("deactivate");
    }
  };

  return (
    <>
      <section className="main__homepage-section">
        <article className="main__homepage-profile">
          <div className="main__homepage-profile-banner main__homepage-profile-banner--default"></div>
          <div className="main__homepage-profile-image main__homepage-profile-image--default"></div>
          <div className="main__homepage-profile-text">
            <div className="main__homepage-profile-text--together">
              <h2>Nova van der Vegt</h2>
              <h5 className="font-300">Frontend Web Developer</h5>
            </div>
            <div
              className="aboutme__button"
              id="aboutme__overlay-button"
              onClick={ActivateOverlay}
            >
              <h4>About me.</h4>
            </div>
          </div>
        </article>
      </section>
      <AboutMeOverlay onClick={DeactivateOverlay} ref={elementRef}/>
    </>
  );
};

export default HomepageProfile;
