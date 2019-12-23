import React from 'react';
import { ReactComponent as Github } from '../assets/SVG/github-with-circle.svg';
import { ReactComponent as Facebook } from '../assets/SVG/facebook-with-circle.svg';
import { ReactComponent as Linkedin } from '../assets/SVG/linkedin-with-circle.svg';
import { ReactComponent as Email } from '../assets/SVG/mail.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Contact</h2>
      </div>
      <div className="contact__navigation">
        <ul className="contact__list u-margin-bottom-big">
          <li className="contact__item">
            <a href="#" className="contact__link">
              <Github className="contact__link-icon" />
            </a>
          </li>
          <li className="contact__item">
            <a href="#" className="contact__link">
              <Facebook className="contact__link-icon" />
            </a>
          </li>
          <li className="contact__item">
            <a
              href="https://www.linkedin.com/in/ravart/"
              className="contact__link"
              target="_blank"
            >
              <Linkedin className="contact__link-icon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact__email">
        <Email className="contact__email-icon" />
        <h3>ravkart@gmail.com</h3>
      </div>
    </div>
  );
};

export default Contact;
