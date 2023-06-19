import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className='footer-content'>
        <div className='footer-section'>
          <h3>À propos</h3>
          <p>N'hésitez pas à me contacter pour parler de vos projets</p>
        </div>
        <div className='footer-section'>
          <h3>Contact</h3>
          {/* <p>Adresse : 123 Rue de l'Exemple, 75000 Ville, Pays</p> */}
          <p>Téléphone : +33 6 87 18 97 87</p>
          <p>Email : pierrejean.sappey@gmail.com</p>
        </div>
        <div className='footer-section'>
          <h3>Réseaux sociaux</h3>
          <ul className='social-links'>
            <li>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/pierre-jean-sappey-marinier-4873a468/'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://github.com/Pierre-Jean-Sappey-Marinier'
              >
                GitHub
              </a>
            </li>
            {/* <li>
              <a href='https://www.instagram.com/'>Instagram</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; {new Date().getFullYear()} MonSite - Tous droits réservés</p>
      </div>
    </footer>
  );
};

export default Footer;
