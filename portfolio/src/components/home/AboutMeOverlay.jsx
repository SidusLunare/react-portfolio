import React, { forwardRef } from 'react';

const AboutMeOverlay = forwardRef(({ onClick }, ref) => {
  const contactItems = [
    {
      image: './img/svg/image 4.svg',
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/pascal-van-der-vegt-bb1a90234/',
    },
    {
      image: './img/svg/image 6.svg',
      title: 'Github',
      link: 'https://github.com/pascal-vegt',
    },
    {
      image: './img/svg/email.svg',
      title: 'E-mail',
      link: 'mailto:stefanpftf@gmail.com',
    },
  ];

  return (
    <section
      className="aboutme__overlay aboutme__overlay--inactive"
      id="aboutme__overlay"
      ref={ref}
    >
      <article className="aboutme__overlay-article">
        <div id="closeAboutmeButton" className="aboutme__close">
          <img
            className="aboutme__close-button"
            src="./img/svg/close.svg"
            alt="Close overlay"
            onClick={onClick}
          />
        </div>
        <h3>About me</h3>
        <p>
          Hoi, ik ben Nova van der Vegt, 19 jaar oud en momenteel bezig met mijn
          opleiding tot Software developer bij het Techniek College Rotterdam.
          Mijn vrije tijd besteed ik graag aan gamen of aan rustgevende
          wandelingen, vaak in het gezelschap van mijn trouwe hond Pixel.
        </p>
        <h3>Contact Informatie</h3>
        {contactItems.map((item, index) => (
          <div className="aboutme__overlay-object" key={index}>
            <img
              className="aboutme__overlay-image"
              src={item.image}
              alt={item.title}
            />
            <div className="aboutme__overlay-objecttext">
              <h4>{item.title}</h4>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
});

export default AboutMeOverlay;