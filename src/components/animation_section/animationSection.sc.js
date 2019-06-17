import styled from 'styled-components';
import { slideIn } from '../../styles/pages.sc';

export const LeftHero = styled.div`
  positon: fixed;
  width: 10%;
  background-color: ${({ color }) => color || '#660505'};
  height: 100vh;
  margin-left: 0;
  animation: ${slideIn} .3s ease;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`