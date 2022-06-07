import React, { useState } from 'react';
import { MenuBottom, MenuLeft, MenuRight, MenuTop, MobileImage, PageContainer } from '../styles/pages.sc';
import { useRouter } from 'next/router';
import Image from 'next/image'
import CubeMenu from '../components/cubeMenu/CubeMenu';
import { FiBox, FiUser, FiFile } from 'react-icons/fi';
import BlobOne from '../images/blobs/blob_one.svg';
import BlobTwo from '../images/blobs/blob_two.svg';
import LayoutBackground from '../components/layoutBackground';
import { CubeAvatarImage } from '../components/header/header.sc';

import Avatar from '../public/assets/avatar.png'
import NavigationElement from '../components/cubeNavigation/NavigationElement';
import SocialElement from '../components/cubeNavigation/SocialElement';
import ThemeToggle from '../components/themeToggle/ThemeToggle';
import { GlobalStyle } from '../components/layout.styles';

export const SELECT_ANIMATION_TIME = 1500;

const StartPage = () => {
  const [isSelected, setIsSelected] = useState(null);
  const [isNavigated, setIsNavigated] = useState(false);

  const router = useRouter()

  const select = (loc) => {
    setIsSelected(loc);
    if (window.innerWidth < 800) {
      setIsNavigated(true);
      router.push(loc);
    } else {
      setTimeout(() => {
        router.push(loc);
        setIsNavigated(true);
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
      <GlobalStyle />
      {/*<SEO title="Welcome" description="Welcome to my website" />*/}
      <PageContainer>
        <MobileImage>
          <CubeAvatarImage>
            <Image height="100px" width="100px" src={Avatar} />
          </CubeAvatarImage>
        </MobileImage>

        {!isNavigated && (
          <>
            <MenuTop>
              <NavigationElement
                select={select}
                blob={<BlobOne />}
                icon={<FiBox />}
                isSelected={isSelected === '/dev'}
                url={'/dev'}
                name={'Journey'}
              />
            </MenuTop>
            <MenuLeft>
              <NavigationElement
                select={select}
                blob={<BlobTwo />}
                icon={<FiUser />}
                isSelected={isSelected === '/landing'}
                url={'/landing'}
                name={'About'}
              />
            </MenuLeft>
            <MenuRight>
              <NavigationElement
                select={select}
                blob={<BlobTwo />}
                icon={<FiFile />}
                isSelected={isSelected === '/blog'}
                url={'/blog'}
                name={'Blog'}
              />
            </MenuRight>
            <MenuBottom>
              <SocialElement centered setHovered={setThisHovers} resetHovered={resetHovered} />
            </MenuBottom>
            <ThemeToggle />
            <CubeMenu hovered={hovered} isSelected={!!isSelected} />
          </>
        )}
      </PageContainer>
    </LayoutBackground>
  );
};

export default StartPage;
