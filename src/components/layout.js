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
  background-color: rgba(55,3,0, 1);
`;

const TopSection = styled.header`
  position: fixed;
  width: 100vw;
`;

const BodySection = styled.main`
  margin-top: 120px;
  
`;

const Wave = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper >
      <Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="rgba(255,255,255, 0.2)" fill-opacity="1" d="M0,64L17.1,90.7C34.3,117,69,171,103,208C137.1,245,171,267,206,266.7C240,267,274,245,309,208C342.9,171,377,117,411,85.3C445.7,53,480,43,514,58.7C548.6,75,583,117,617,122.7C651.4,128,686,96,720,106.7C754.3,117,789,171,823,186.7C857.1,203,891,181,926,186.7C960,192,994,224,1029,234.7C1062.9,245,1097,235,1131,218.7C1165.7,203,1200,181,1234,186.7C1268.6,192,1303,224,1337,202.7C1371.4,181,1406,107,1423,69.3L1440,32L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
        </svg>
      </Wave>
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
