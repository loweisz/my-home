import styled, { createGlobalStyle } from 'styled-components';
import MoskNormal from '../fonts/mosk_normal.ttf';
import MoskBold from '../fonts/mosk_bold.ttf';
import MoskExtraBold from '../fonts/mosk_extra_bold.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Mosk';
    src: local('Mosk'), url(${MoskNormal}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mosk';
    src: local('Mosk'), url(${MoskBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: 'Mosk';
    src: local('Mosk'), url(${MoskExtraBold}) format('truetype');
    font-weight: 900;
    font-style: normal;
  }
`;

export const LayoutWrapper = styled.div`
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const TopSection = styled.header`
  @media screen and (max-width: 800px) {
    position: initial;
  }
  position: fixed;
  height: 100px;
  width: 100vw;
  z-index: 10;
`;

export const MobileSocial = styled.div`
  margin-top: -40px;
  margin-bottom: 20px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const BodySection = styled.main`
  margin-top: ${({ fixed }) => fixed ? '140px' : '60px'};
  padding: 15px 15px 50px 15px;
  flex: 1;
  z-index: 5;

  @media screen and (max-width: 800px) {
    margin-top: 60px;
    padding: 15px 15px 100px 15px;
  }
`;

export const Wave = styled.div`
  margin-top: 100px;
  position: ${({ fixed }) => fixed ? 'fixed' : 'initial'};
  z-index: 4;
  width: 100%;
  height: 0px;
  color: ${({ theme }) => theme.white};

  @media screen and (max-width: 800px) {
    margin-top: -30px;
    position: initial;
  }
`;
