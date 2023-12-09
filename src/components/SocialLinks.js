import React from 'react';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.linkedin.com/in/thomasprunet" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/linkedin.png`}  alt="vers Linkedin" /></a>
      <a href="https://github.com/thomasprunet" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/github.png`} alt="vers Github" /></a>
      <a href="https://www.instagram.com/thomasprunetcom" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/instagram.png`} alt="vers Instagram" /></a>
      <a href="https://www.thomasprunet.com" target="_blank"><img src={`${process.env.PUBLIC_URL}/media/web.png`} alt="vers mon site" /></a>
    </div>
  );
}

export default SocialLinks;