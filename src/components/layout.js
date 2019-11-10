import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import Tabs from './tabs/Tabs';
import Header from './header/Header';
import LayoutBackground from './layoutBackground';
import { BodySection, LayoutWrapper, TopSection } from './layout.styles';
import Wave from './wave/Wave';

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
      <Wave />
      <LayoutWrapper>
        <TopSection>
          <Header offset={offset} />
          <Tabs offset={offset} color={'#ba7200'} />
        </TopSection>
        <BodySection>{children}</BodySection>
      </LayoutWrapper>
    </LayoutBackground>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
