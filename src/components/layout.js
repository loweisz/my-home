import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import './layout.css'
import Tabs from "./tabs/Tabs";
import Header from "./header/Header";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #2e703f;
`;

const TopSection = styled.header`
  position: fixed;
  width: 100vw;
`;

const BodySection = styled.main`
  margin-top: 120px;
  
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper >
      <TopSection>
        <Header/>
        <Tabs color={'#ba7200'} />
      </TopSection>
      <BodySection>
        {children}
      </BodySection>
    </LayoutWrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
