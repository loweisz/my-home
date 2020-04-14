import React from 'react';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MenuText, SocialIcon } from './navigationElement.styles';

export const socialIcons = ['linkedIn', 'twitter', 'github'];

export const iconsObj = {
  linkedIn: { icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/lorenz-wei%C3%9F-032689165/' },
  twitter: { icon: IoLogoTwitter, link: 'https://twitter.com/lorenzweisz' },
  github: { icon: IoLogoGithub, link: 'https://github.com/loweisz' },
};

const IconElement = ({ setHovered, resetHovered, icon }) => {
  const hoverThis = () => setHovered(icon);
  return (
    <SocialIcon key={icon} onMouseEnter={hoverThis} onMouseLeave={resetHovered}>
      <a href={iconsObj[icon].link} target="_blank" rel="noopener noreferrer">
        {iconsObj[icon].icon()}
      </a>
    </SocialIcon>
  );
};

const SocialElement = (props) => (
  <MenuText>
    {socialIcons.map((icon) => (
      <IconElement key={icon} icon={icon} {...props} />
    ))}
  </MenuText>
);

export default SocialElement;
