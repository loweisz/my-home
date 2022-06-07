import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const LayoutBackground = ({ children }) => {
  return <Background>{children}</Background>;
};

export default LayoutBackground;
