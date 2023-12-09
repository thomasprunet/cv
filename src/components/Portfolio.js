import React, { useState } from 'react';
import CustomModal from './Modal';
import './Popup.css';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  const projects = [
    { id: 1, title: 'Projet: CV portfolio', image: `${process.env.PUBLIC_URL}/media/vignette-p2.png`, text: `C'est mon premier projet de développement sous React.js. C'est également le site que vous parcourez actuellement. Ce projet est une prise en main des outils React, et la poursuite de mon apprentissage du langage Javascript.` },
    { id: 2, title: 'Projet: Pokedex', image: `${process.env.PUBLIC_URL}/media/vignette-p1.png`, text: `C'est le premier projet que j'ai réalisé et publié sur Github. C'est une adaptation de tutoriel, une première prise en main de l'environnement Javascript.`, link: 'https://www.thomasprunet.com/pokedex/' },
    { id: 3, title: 'Work in progress 1', image: `${process.env.PUBLIC_URL}/media/vignette-p.png`, text: `Un projet est en cours de construction et devrait être ajouté prochainement.` },
    { id: 4, title: 'Work in progress 2', image: `${process.env.PUBLIC_URL}/media/vignette-p.png`, text: `Un projet est en cours de construction et devrait être ajouté prochainement.` },
  ];

  return (
    <div className="content4">
      <div className="Portfolio">
        {projects.map((project) => (
          <div className="Portfolio1" key={project.id}>
            <div className="Portfolio2">
              <h3>{project.title}</h3>
            </div>
            <div className="Portfolio2">
              <img src={project.image} alt="Aperçu du projet" />
            </div>
            <div className="Portfolio2">
              <button onClick={() => openModal(project)}>+</button>
            </div>
          </div>
        ))}

        <CustomModal
        isOpen={currentProject !== null}
        onClose={closeModal}
        title={currentProject ? currentProject.title : ''}
        text={currentProject ? (
          <div>
            {currentProject.text}
            {currentProject.link && (
              <p>
                Pour voir le projet en ligne: {' '}
                <a
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  par ici
                </a>
                .
              </p>
            )}
          </div>
        ) : ''}
      />
    </div>
  </div>
);
};

export default Portfolio;