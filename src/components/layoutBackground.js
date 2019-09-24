import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import './layout.css';

const Background = styled.div`
  background-color: rgba(55, 3, 0, 1);
`;

const LayoutBackground = ({ children }) => {
  return <Background>{children}</Background>;
};

LayoutBackground.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutBackground;
