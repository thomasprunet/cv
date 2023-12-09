import React, { useEffect, useState } from 'react';

const Skills = () => {
  const [fillPercentage, setFillPercentage] = useState({
    langages: {
      HTML: 90,
      CSS: 90,
      Javascript: 50,
      PHP: 30,
    },
    frameworks: {
      Node: 40,
      React: 50,
      Bootstrap: 15,
    },
  });

  const [loadingPercentage, setLoadingPercentage] = useState({
    langages: {
      HTML: 0,
      CSS: 0,
      Javascript: 0,
      PHP: 0,
    },
    frameworks: {
      Node: 0,
      React: 0,
      Bootstrap: 0,
    },
  });

  useEffect(() => {

    const interval = setInterval(() => {
      setLoadingPercentage((prevLoading) => {
        const updatedLoading = { ...prevLoading };
        let allLoaded = true;

        Object.keys(fillPercentage.langages).forEach((skill) => {
          if (updatedLoading.langages[skill] < fillPercentage.langages[skill]) {
            updatedLoading.langages[skill] += 1;
            allLoaded = false;
          }
        });

        Object.keys(fillPercentage.frameworks).forEach((skill) => {
          if (updatedLoading.frameworks[skill] < fillPercentage.frameworks[skill]) {
            updatedLoading.frameworks[skill] += 1;
            allLoaded = false;
          }
        });

        if (allLoaded) {
          clearInterval(interval);
        }

        return updatedLoading;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [fillPercentage]);

  return (
    <div className="content2">
      <div className="contentSkills">
        <div id="langage" className="Langage">
          <div className="Langage1">
            <h3>Langages</h3>
            <ul>
              {Object.keys(fillPercentage.langages).map((skill) => (
                <React.Fragment key={skill}>
                  <li>{skill}</li>
                  <li>
                    <div className="barre">
                      <div className="fill" style={{ width: `${loadingPercentage.langages[skill]}%` }}></div>
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>

          <div className="Langage2">
            <h3>Frameworks & Bibliothèques</h3>
            <ul>
              {Object.keys(fillPercentage.frameworks).map((skill) => (
                <React.Fragment key={skill}>
                  <li>{skill}</li>
                  <li>
                    <div className="barre">
                      <div className="fill" style={{ width: `${loadingPercentage.frameworks[skill]}%` }}></div>
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        <div id="experiences" className="Experience">
          <h3>Expériences</h3>

          <div className="Experience1">
            <h4>Poste : Alternance Développeur Web</h4>
            <ul>
              <li>Entreprise : En recherche</li>
              <li>Date : 2024-2025</li>
              <li>Développeur Web</li>
            </ul>
          </div>

          <div className="Experience0"></div>

          <div className="Experience1">
            <h4>Poste : Graphiste PAO</h4>
            <ul>
              <li>Entreprise : Adhékit</li>
              <li>Date : 2022-2023</li>
              <li>Infographiste, technicien (machines de découpe, de press textile et d'impression), manutention, commercial</li>
            </ul>
          </div>

          <div className="Experience0"></div>

          <div className="Experience2">
            <h4>Poste : Infirmier</h4>
            <ul>
              <li>Entreprise : Hopital et libéral</li>
              <li>Date : 2011-2020</li>
              <li>Infirmier en EHPAD, hôpital, libéral.</li>
            </ul>
          </div>
        </div>

        <div id="autres-competences" className="AutresSkills">
          <h3>Autres compétences</h3>

          <div className="AutresSkills0">
            <div className="AutresSkills1">
              <ul>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Github</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />SEO</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />UI/UX Design</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Anglais</li>
              </ul>
            </div>

            <div className="AutresSkills2">
              <ul>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Photoshop</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Illustrator</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Adobe Première</li>
                <li><img src={`${process.env.PUBLIC_URL}/media/autresSkills.png`} alt="icone compétence" />Adobe XD</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="centres-interet" className="CentresInteret">
          <h3>Centres d'intérêt</h3>
          <ul>
            <li><img src={`${process.env.PUBLIC_URL}/media/running.png`}alt="icone interet 1" />Running</li>
            <li><img src={`${process.env.PUBLIC_URL}/media/velo.png`} alt="icone interet 2" />Vélo</li>
            <li><img src={`${process.env.PUBLIC_URL}/media/musculation.png`} alt="icone interet 3" />Musculation</li>
            <li><img src={`${process.env.PUBLIC_URL}/media/societe.png`} alt="icone interet 4" />Jeux de société</li>
            <li><img src={`${process.env.PUBLIC_URL}/media/games.png`} alt="icone interet 5" />Jeux vidéo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;