import React from 'react';
import styled from 'styled-components';
import CubeElement from './CubeElement';
import { Cube, Wrapper } from './cubeMenu.styles';

const CubeContainer = styled.div`
  transition: all 400ms ease-in-out;
  &:hover {
    transform: scale(1.5) translateX(-6px) translateY(-6px);
  }
`;

function SimpleAutoCube(props) {
  return (
    <CubeContainer>
      <CubeElement automated size="small" />
    </CubeContainer>
  );
}

export default SimpleAutoCube;
