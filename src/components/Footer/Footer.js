import React from 'react';
import './Footer.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone by -{' '}
        <a
          href="https://www.linkedin.com/in/shreyas-lakshman-swamy-256a36217/"
          target="__blank"
        >
          Shreyas Lakshman Swamy
        </a>
      </span>
      <hr style={{ width: '90%' }} />
      <div className="iconContainer">
        <a href="https://www.twitter.com/LakshmanShreyas/" target="__blank">
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shreyas-lakshman-swamy-256a36217/"
          target="__blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/shreyaslax/" target="__blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
