import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './layout.css';
import Tabs from './tabs/Tabs';
import Header from './header/Header';
import LayoutBackground from './layoutBackground';
import { BodySection, LayoutWrapper, TopSection } from './layout.styles';
import Footer from './footer/Footer';

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
      <LayoutWrapper>
        <TopSection>
          <Header offset={offset} />
          <Tabs offset={offset} />
        </TopSection>
        <BodySection>{children}</BodySection>
        <Footer />
      </LayoutWrapper>
    </LayoutBackground>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
