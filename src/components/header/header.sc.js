import styled, { keyframes } from 'styled-components';

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Desktop = styled.div`
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const InfoHeader = styled.div`
  font-family: Mosk;
  font-weight: 900;
  background-color: ${({ theme }) => theme.red};
  z-index: 1;
  color: ${({ theme }) => theme.black};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 20px;
  border-bottom: 4px solid ${({ theme }) => theme.black};
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 70px !important;
    box-sizing: border-box;
  }
`;

export const SocialSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 20px 40px;
`;

export const LinkContainer = styled.div`
  display: flex;
  a {
    color: #eee;
    font-size: 35px;
    margin: 10px;

    &:hover {
      color: #ffacb3;
    }
  }
`;

export const HeaderSection = styled.div`
  width: 33%;
  @media screen and (max-width: 800px) {
    width: auto;
    display: ${({ onlyDesktop }) => (onlyDesktop ? 'none' : 'flex')};
    justify-content: center;
  }
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
`;

const mobileImageFadeIn = keyframes`
  0% {
    opacity: 0;
    margin-top: -46px;
  }
  60% {
    opacity: 1;
    margin-top: 30px;
  }
  100% {
    margin-top: 24px;
  }
`;

const imageFadeIn = keyframes`
  0% {
    opacity: 0;
    margin-bottom: 300px;
  }
  60% {
    opacity: 1;
    margin-bottom: -30px;
  }
  100% {
    margin-bottom: 0px;
    opacity: 1;
  }
`;

const swing = keyframes`
  0% { transform: rotate(6deg); }
  100% { transform: rotate(-6deg); 
`;

export const AvatarImage = styled.div`
  animation: ${imageFadeIn} 400ms ease-in-out;
  animation-fill-mode: forwards;
  border-radius: 60%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  border: 4px solid ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.background};
  height: 130px;
  width: 130px;
  position: relative;
  @media screen and (max-width: 800px) {
    height: 80px !important;
    width: 80px !important;
    margin-top: 54px !important;
    animation: ${mobileImageFadeIn} 400ms ease-in-out;
  }

  > img {
    width: 100%;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 8px;
    border-left: 3px solid ${({ theme }) => theme.white};
    border-right: 3px solid ${({ theme }) => theme.white};
    left: calc(50% - 6px);
    height: 100px;
    background: ${({ theme }) => theme.background};
    top: -100px;
  }
`;

export const CubeAvatarImage = styled(AvatarImage)`
  animation: none;
  &:before {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  left: 50%;
  flex-grow: 0;
  margin-top: 140px;
  width: fit-content;
  
  @media screen and (max-width: 800px) {
    left: auto;
    flex-grow: 0;
    margin-top: 5px;
  }
  &:hover {
    transform-origin: center -60px;
    animation: ${swing} ease-in-out 1s infinite alternate;
  }
`;
