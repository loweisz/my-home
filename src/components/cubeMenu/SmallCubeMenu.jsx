import React from 'react';
import SimpleAutoCube from './SimpleAutoCube';
import { Link } from '@reach/router';
import styled from 'styled-components';

const CubeWrapper = styled(Link)`
  position: fixed;
  display: block;
  bottom: 10px;
  right: 10px;
`;

function SmallCubeMenu(props) {
  return (
    <CubeWrapper to="/">
      <SimpleAutoCube />
    </CubeWrapper>
  );
}

export default SmallCubeMenu;
