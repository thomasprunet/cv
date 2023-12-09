import React, { useState, useEffect } from 'react';
import SocialLinks from './SocialLinks.js';
import { useTheme } from '../ThemeContext';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="menu">
      {isMobile && (
        <div className="mobile-bar">

          <button className="mobile-darkmode" onClick={toggleDarkMode}>
            {darkMode ? (<img src={`${process.env.PUBLIC_URL}/media/lune2.png`} alt="icone mode sombre" />) :
            (<img src={`${process.env.PUBLIC_URL}/media/soleil2.png`} alt="icone mode clair" />)
            }
          </button>
  
          <div className="mobile-links">
          <div className="mobile-link"><Link to="/"><img src={`${process.env.PUBLIC_URL}/media/accueil2.png`} alt="Icône 1" /></Link></div>
          <div className="mobile-link"><Link to="/skills"><img src={`${process.env.PUBLIC_URL}/media/skills2.png`} alt="Icône 2" /></Link></div>
          <div className="mobile-link"><Link to="/portfolio"><img src={`${process.env.PUBLIC_URL}/media/portfolio2.png`} alt="Icône 3" /></Link></div>
          <div className="mobile-link"><Link to="/contact"><img src={`${process.env.PUBLIC_URL}/media/contact2.png`} alt="Icône 4" /></Link></div>
          </div>

        </div>
      )}

      <div className="menu0">
        <div className="menu3">
          <button onClick={toggleDarkMode}>
            {darkMode ? <img src={`${process.env.PUBLIC_URL}/media/lune.png`} alt="icone mode sombre" />
            : <img src={`${process.env.PUBLIC_URL}/media/soleil.png`} alt="icone mode clair" />}
          </button>
        </div>

        <div className="menu1">
          <img className="photo" src={`${process.env.PUBLIC_URL}/media/moi.png`} alt="Photo de profil" />
          <p>Développeur Web</p>
          <p>Actuellement en formation pour devenir Développeur Web avancé. Reconversion professionnelle après avoir été infirmier.</p>

          <nav>
            <ul>
              <li><img src={`${process.env.PUBLIC_URL}/media/accueil.png`} alt="icone accueil" /><Link to="/">Accueil</Link></li>
              <li><img src={`${process.env.PUBLIC_URL}/media/skills.png`} alt="icone compétences" /><Link to="/skills">Compétences</Link></li>
              <li><img src={`${process.env.PUBLIC_URL}/media/portfolio.png`} alt="icone portfolio" /><Link to="/portfolio">Portfolio</Link></li>
              <li><img src={`${process.env.PUBLIC_URL}/media/contact.png`} alt="icone contact" /><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <SocialLinks />
        </div>

        <div className="menu2">
          <p>Mise à jour :</p>
          <p>Décembre 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;
