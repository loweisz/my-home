import React, { useState } from 'react';
import CubeMenu from '../components/cubeMenu/CubeMenu';
import { MenuBottom, MenuLeft, MenuRight, MenuText, MenuTop, PageContainer } from '../styles/pages.sc';
import { navigate } from '@reach/router';
import { FiBox, FiUser, FiFile, FiAward } from 'react-icons/fi';
import LayoutBackground from '../components/layoutBackground';

export const SELECT_ANIMATION_TIME = 2400;

const StartPage = () => {
  const [isSelected, setIsSelected] = useState(false);

  const select = (loc) => {
    console.log('select');
    setIsSelected(true);
    setTimeout(() => {
      navigate(loc);
    }, SELECT_ANIMATION_TIME);
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
          <FiAward />
          <div onClick={() => select('/landing')}>
            <MenuText>Career</MenuText>
          </div>
        </MenuBottom>
        <CubeMenu isSelected={isSelected} />
      </PageContainer>
    </LayoutBackground>
  );
};

export default StartPage;
