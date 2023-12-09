import React from 'react';

const Contact = () => {
  return (
    <div className="content3">
      
      <div className="Contact">
        <div className="Contact1"><h2>Contactez-moi</h2></div>
        <div className="Contact1"></div>
        <div className="Contact1"><img src={`${process.env.PUBLIC_URL}/media/localisation.png`} alt="icone de localisation" />Narbonne</div>
        <div className="Contact1"><img src={`${process.env.PUBLIC_URL}/media/telephone.png`} alt="icone de téléphone" />06 51 46 01 31</div>
        <div className="Contact1"><img src={`${process.env.PUBLIC_URL}/media/mail.png`} alt="icone de mail" /><a href="mailto:pro.prunet@gmail.com">pro.prunet@gmail.com</a></div>
      </div>

      <div className="Contact2">
      <li>LinkedIn<a href="https://www.linkedin.com/in/thomasprunet" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/linkedin.png`} alt="icone LinkedIn" /></a></li>
      <li>Github<a href="https://github.com/thomasprunet" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/github.png`} alt="icone Github" /></a></li>
      <li>Instagram<a href="https://www.instagram.com/thomasprunetcom" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/instagram.png`} alt="icone Instagram" /></a></li>
      <li>Site web<a href="https://www.thomasprunet.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/web.png`} alt="icone Site web" /></a></li>
      </div>

    </div>
  );
}

export default Contact;