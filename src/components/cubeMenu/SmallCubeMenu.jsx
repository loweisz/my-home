import React from 'react';
import SimpleAutoCube from './SimpleAutoCube';
import { Link } from '@reach/router';
import styled from 'styled-components';

const CubeWrapper = styled(Link)`
  position: fixed;
  display: block;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  height: 90px;
  width: 90px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

function SmallCubeMenu(props) {
  return (
    <CubeWrapper to="/">
      <SimpleAutoCube />
    </CubeWrapper>
  );
}

export default SmallCubeMenu;
