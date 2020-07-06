import styled, { keyframes, css } from 'styled-components';
import { moveFadeIn, opacIn } from './animations';

const glow = ({ theme }) => keyframes`
  50% {
    box-shadow: 
       150px -15px 0px 10px ${theme.black},
       120px -40px 0px -3px ${theme.black},
       120px 30px 0px 10px ${theme.black},
       
       -30px -80px 0px 7px ${theme.black},
       30px -80px 0px 4px ${theme.black},
       
       -30px 80px 0px 10px ${theme.black},
       30px 80px 0px -10px ${theme.black},
       
       -170px -10px 0px 7px ${theme.black},
       -140px -50px 0px -5px ${theme.black},
       -140px 30px 0px 10px ${theme.black};
  }
`;

export const HiContainer = styled.div`
  font-family: Mosk;
  font-size: 70px;
  line-height: 85px;
  font-weight: 900;
  margin-bottom: 100px;
  top: 530px;
  right: 19%;
  position: absolute;
  > a {
    color: ${({ theme }) => theme.black};
  }

`

export const HiLink = styled.a(({ theme }) => css`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: transparent;
    transition: box-shadow 200ms ease;
    box-shadow: 
       150px -10px 0px -5px ${theme.black},
       120px -50px 0px 10px ${theme.black},
       120px 30px 0px 0px ${theme.black},
       
       -30px -80px 0px 0px ${theme.black},
       30px -80px 0px -4px ${theme.black},
       
       -30px 80px 0px -3px ${theme.black},
       30px 80px 0px 2px ${theme.black},
       
       -170px -10px 0px 0px ${theme.black},
       -140px -50px 0px 3px ${theme.black},
       -140px 30px 0px 0px ${theme.black};
  }
  &:hover {
    &:before {
       animation: ${glow} 3s linear;
       animation-fill-mode: backwards;
       animation-iteration-count: infinite;
    }
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`);

export const imageFadeIn = keyframes`
  to {
    opacity: 1;
    top: 36px;
  }
`;

export const AvatarImage = styled.div`
  animation: ${imageFadeIn} 250ms ease-in;
  animation-delay: 400ms;
  animation-fill-mode: forwards;
  position: absolute;
  top: 100px;
  opacity: 0;
  right: 0;
  border-radius: 60%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.red};
  height: 230px;
  width: 230px;
  @media screen and (max-width: 800px) {
    position: static;
    height: 100px !important;
    width: 100px !important;
    margin-bottom: 30px;
  }

  > img {
    width: 100%;
  }
`;

export const IntroText = styled.p`
  color: ${({ theme }) => theme.black};
  font-family: Mosk;
  font-size: 70px;
  line-height: 85px;
  font-weight: 900;
  margin-top: 20px;
  @media screen and (max-width: 1100px) {
    font-size: 32px;
    line-height: 46px;
  }

  > a {
    color: ${({ theme }) => theme.black};
  }
`;

export const InfoStarter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    overflow: initial;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  animation: ${moveFadeIn} 200ms ease-in;
`;

export const PageHeader = styled.h1`
  color: ${({ theme }) => theme.black};
  text-align: start;
  animation: ${opacIn} 150ms ease-in;
  font-family: 'Mosk';
  font-weight: 900;
  width: 100%;
  max-width: 1200px;
`;

export const TextSection = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;
  padding-bottom: 20px;
`;

export const HeaderText = styled.div`
  font-family: 'Mosk';
  color: ${({ theme }) => theme.black};
  font-size: 60px;
  line-height: 75px;
  font-weight: 900;
  @media screen and (max-width: 800px) {
    font-size: 36px;
    line-height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`;

export const LandingHeaderText = styled(HeaderText)`
  @media screen and (max-width: 800px) {
    margin-top: -75px;
  }
`;

export const TextBlock = styled.div`
  margin-top: 30px;
  text-align: start;
  font-size: 29px;
  font-weight: 300;
  line-height: 45px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  > span {
    color: ${({ theme }) => theme.black};
    > a {
      color: ${({ theme }) => theme.darkRed};
    }
  }
  @media screen and (max-width: 800px) {
    margin-top: 0;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: ${({ theme }) => theme.background};
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    overflow: auto;
  }
`;

export const MobileImage = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
  > img {
    width: 100px;
    height: 100px;
  }
`;

const Menu = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 50px;
  color: white;
  cursor: pointer;
  @media screen and (max-width: 800px) {
    position: initial;
    margin-top: 30px;
    font-size: 40px;
  }
  div {
    margin-left: 20px;
    text-decoration: none;
    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
  }

  &.blob {
    position: absolute;
    svg {
      height: 200px;
      width: 200px;
    }
  }
`;

export const MenuTop = styled(Menu)`
  top: 50px;
  width: 100%;
  .blob > svg {
    top: -500px;
  }
`;

export const MenuLeft = styled(Menu)`
  left: 50px;
  .blob > svg {
    left: -500px;
  }
`;

export const MenuRight = styled(Menu)`
  right: 50px;
  .blob > svg {
    right: -500px;
  }
`;

export const MenuBottom = styled(Menu)`
  bottom: 50px;
  width: 100%;

  @media screen and (max-width: 800px) {
    position: initial;
    margin-top: 60px;
    font-size: 40px;
  }
`;

export const Blogs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
