import React, { useState } from 'react';
import CubeMenu from '../components/cubeMenu/CubeMenu';
import {
  MenuBottom,
  MenuLeft,
  MenuRight,
  MenuText,
  MenuTop,
  MobileImage,
  PageContainer,
} from '../styles/pages.sc';
import { navigate } from '@reach/router';
import { FiBox, FiUser, FiFile } from 'react-icons/fi';
import { IoLogoGithub, IoLogoTwitter, IoLogoLinkedin } from 'react-icons/io';
import LayoutBackground from '../components/layoutBackground';
import { AvatarImage } from '../components/header/header.sc';

export const SELECT_ANIMATION_TIME = 1700;

export const socialIcons = ['linkedIn', 'twitter', 'github'];

export const iconsObj = {
  linkedIn: { icon: IoLogoLinkedin, link: 'https://www.linkedin.com/in/lorenz-wei%C3%9F-032689165/' },
  twitter: { icon: IoLogoTwitter, link: 'https://twitter.com/lorenzweisz' },
  github: { icon: IoLogoGithub, link: 'https://github.com/lowe1111' },
};

const StartPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const select = (loc) => {
    console.log('select');
    setIsSelected(true);
    if (window.innerWidth < 800) {
      navigate(loc);
    } else {
      setTimeout(() => {
        navigate(loc);
      }, SELECT_ANIMATION_TIME);
    }
  };

  const [hovered, setHovered] = useState(null);

  const setThisHovers = (id) => {
    setHovered(id);
  };

  const resetHovered = () => {
    setHovered(null);
  };

  return (
    <LayoutBackground>
      <PageContainer>
        <MobileImage>
          <AvatarImage src="https://picsum.photos/200" />
        </MobileImage>
        <MenuTop>
          <FiUser />
          <div onClick={() => select('/landing')}>
            <MenuText>Developer</MenuText>
          </div>
        </MenuTop>
        <MenuLeft>
          <FiFile />
          <div onClick={() => select('/landing')}>
            <MenuText>Blog</MenuText>
          </div>
        </MenuLeft>
        <MenuRight>
          <FiBox />
          <div onClick={() => select('/landing')}>
            <MenuText>Projects</MenuText>
          </div>
        </MenuRight>
        <MenuBottom>
          <MenuText>
            {socialIcons.map((icon) => (
              <div key={icon} onMouseEnter={() => setThisHovers(icon)} onMouseLeave={resetHovered}>
                <a href={iconsObj[icon].link} target="_blank" rel="noopener noreferrer">
                  {iconsObj[icon].icon()}
                </a>
              </div>
            ))}
          </MenuText>
        </MenuBottom>
        <CubeMenu hovered={hovered} isSelected={isSelected} />
      </PageContainer>
    </LayoutBackground>
  );
};

export default StartPage;
