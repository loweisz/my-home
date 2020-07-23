import React from 'react';
import styled from 'styled-components';
import CubeElement from './CubeElement';

const CubeContainer = styled.div`
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.5) translateX(-6px) translateY(-6px);
  }
`;

const SimpleAutoCube = () => (
  <CubeContainer>
    <CubeElement automated size="small"/>
  </CubeContainer>
);

export default SimpleAutoCube;
