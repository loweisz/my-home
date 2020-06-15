import React from 'react';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import { MenuText, SocialIcon } from './navigationElement.styles';

export const socialIcons = ['linkedIn', 'twitter', 'github'];

export const iconsObj = {
  linkedIn: { name: "Social link to linkedIn", icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/lorenz-wei%C3%9F-032689165/' },
  twitter: { name: "Social link to twitter", icon: IoLogoTwitter, link: 'https://twitter.com/loweisz' },
  github: { name: "Social link to github", icon: IoLogoGithub, link: 'https://github.com/loweisz' },
};

const IconElement = ({ setHovered, resetHovered, icon }) => {
  const onMouseEnter = () => {
    if (setHovered) {
      setHovered(icon)
    }
  };

  const onMouseLeave = (e) => {
    if (resetHovered) {
      resetHovered(e)
    }
  }

  return (
    <SocialIcon key={icon} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <a aria-label={iconsObj[icon].name} href={iconsObj[icon].link} target="_blank" rel="noopener noreferrer">
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
