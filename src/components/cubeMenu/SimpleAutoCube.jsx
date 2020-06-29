import React from 'react';
import styled from 'styled-components';
import CubeElement from './CubeElement';

const CubeContainer = styled.div``;

function SimpleAutoCube(props) {
  return (
    <CubeContainer>
      <CubeElement automated size="small" />
    </CubeContainer>
  );
}

export default SimpleAutoCube;
