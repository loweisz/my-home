import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './layout.css';

const Background = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const LayoutBackground = ({ children }) => {
  return <Background>{children}</Background>;
};

LayoutBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBackground;
