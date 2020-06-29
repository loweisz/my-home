import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Tabs from './tabs/Tabs';
import Header from './header/Header';
import LayoutBackground from './layoutBackground';
import { BodySection, LayoutWrapper, TopSection, Wave, MobileSocial, GlobalStyle } from './layout.styles';
import Footer from './footer/Footer';
import SocialElement from './cubeNavigation/SocialElement';
import SmallCubeMenu from './cubeMenu/SmallCubeMenu';

const Layout = ({ children }) => {
  useEffect(() => {
    window.document.addEventListener('scroll', scrollFunc);
    return () => {
      window.document.removeEventListener('scroll', scrollFunc);
    };
  }, []);

  const [offset, setOffset] = useState(0);

  const scrollFunc = (e) => {
    const internOffset = Math.abs(e.target.body.getBoundingClientRect().top);
    if (internOffset <= 94 * 2) {
      setOffset(internOffset / 2);
    } else {
      setOffset(94);
    }
  };

  return (
    <LayoutBackground>
      <GlobalStyle />
      <LayoutWrapper>
        <TopSection>
          <Header offset={offset} />
          <Tabs offset={offset} />
        </TopSection>
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="currentColor"
              d="M0,256L40,240C80,224,160,192,240,192C320,192,400,224,480,202.7C560,181,640,107,720,106.7C800,107,880,181,960,181.3C1040,181,1120,107,1200,80C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </Wave>
        <BodySection>
          <MobileSocial>
            <SocialElement />
          </MobileSocial>
          {children}
        </BodySection>
        <SmallCubeMenu />
        <Footer />
      </LayoutWrapper>
    </LayoutBackground>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
