import styled from 'styled-components';
import { slideIn } from '../../styles/pages.sc';

export const LeftHero = styled.div`
  positon: fixed;
  width: 30%;
  background-color: #03346C;
  height: 100vh;
  margin-left: 0;
  animation: ${slideIn} .3s ease;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`