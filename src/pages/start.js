import React, { useState } from 'react';
import CubeMenu from '../components/cubeMenu/CubeMenu';
import { MenuBottom, MenuLeft, MenuRight, MenuText, MenuTop, PageContainer } from '../styles/pages.sc';
import { navigate } from '@reach/router';
import { FiBox, FiUser, FiFile, FiAward } from 'react-icons/fi';
import LayoutBackground from '../components/layoutBackground';

import github from '../images/github_new.svg';
import linkedIn from '../images/linked_new.svg';
import twitter from '../images/twitter_new.svg';
import { LightIconImg, LinkImg } from '../components/header/header.sc';

export const SELECT_ANIMATION_TIME = 2400;

export const socialIcons = ['linkedIn', 'twitter', 'github'];

export const iconsObj = {
  linkedIn: linkedIn,
  twitter: twitter,
  github: github,
};

const StartPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const select = (loc) => {
    console.log('select');
    setIsSelected(true);
    setTimeout(() => {
      navigate(loc);
    }, SELECT_ANIMATION_TIME);
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
                <LightIconImg src={iconsObj[icon]} />
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
