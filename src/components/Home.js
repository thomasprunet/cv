import React from 'react';

const Home = () => {
  return (
    <div className="content">
      <h1>THOMAS PRUNET</h1>
      <div className="photoMobile">
      <img src={`${process.env.PUBLIC_URL}/media/moi.png`} alt="Photo de profil" />
      </div>
      <div className="presentation">
      <p>Je m'appelle Thomas, j'ai 38 ans, je suis en formation Développeur Web Avancé Javascript.<br />J'ai obtenu en 2020 un diplôme national de Webdesigner (bac +2), après une reconversion du métier d'infirmier.</p><p>Aujourd'hui, je recherche activement une entreprise pour réaliser 12 mois d'alternance à compter du 26 Février 2024.</p>
      </div>
      <a href={`${process.env.PUBLIC_URL}/media/CV-ThomasPrunet.pdf`} download className="Accueil">
        <button className="boutonAccueil">Télécharger le CV en version PDF</button>
      </a>
      <div className="monbureau">
        <img src={`${process.env.PUBLIC_URL}/media/bureau.png`} alt="image de mon bureau" />
      </div>
    </div>
  );
}

export default Home;