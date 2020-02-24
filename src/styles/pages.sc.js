import styled from 'styled-components';
import BlobOne from '../images/blobs/blob_one.svg';
import BlobTwo from '../images/blobs/blob_two.svg';
import BlobThree from '../images/blobs/blob_three.svg';
import { moveFadeIn, opacIn } from './animations';
// import BlobFour from '../images/blobs/blob_four.svg';

export const BlobOneStyled = styled(BlobOne)`
  position: absolute;
  height: ${({ isSelected }) => (isSelected ? ' 5000px' : '800px')};
  width: ${({ isSelected }) => (isSelected ? ' 7000px' : '800px')};
  top: ${({ isSelected }) => (isSelected ? '-2500px' : '-540px')};
  transition: ${({ isSelected }) => (isSelected ? 'all 1000ms ease-in-out' : 'all 200ms ease-in-out')};
`;

export const BlobTwoStyled = styled(BlobTwo)`
  position: absolute;
  height: ${({ isSelected }) => (isSelected ? ' 5000px' : '800px')};
  width: ${({ isSelected }) => (isSelected ? ' 7000px' : '800px')};
  left: ${({ isSelected }) => (isSelected ? '-2500px' : '-570px')};
  transition: ${({ isSelected }) => (isSelected ? 'all 1000ms ease-in-out' : 'all 200ms ease-in-out')};
`;

export const BlobThreeStyled = styled(BlobThree)`
  position: absolute;
  height: ${({ isSelected }) => (isSelected ? ' 5000px' : '800px')};
  width: ${({ isSelected }) => (isSelected ? ' 7000px' : '800px')};
  right: ${({ isSelected }) => (isSelected ? '-2500px' : '-500px')};
  transition: ${({ isSelected }) => (isSelected ? 'all 1000ms ease-in-out' : 'all 200ms ease-in-out')};
`;

// export const BlobFourStyled = styled(BlobFour)`
//   position: absolute;
//   height: 400px;
//   width: 400px;
// `;

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
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  animation: ${moveFadeIn} 350ms ease-in;
`;

export const PageHeader = styled.h1`
  color: white;
  text-align: start;
  animation: ${opacIn} 150ms ease-in;
  width: 100%;
  max-width: 970px;
`;

export const SubHeader = styled.p`
  max-width: 800px;
  color: white;
  text-align: start;
  animation: ${opacIn} 350ms ease-in;
`;

export const Tab = styled.div`
  background-color: #660505;
  height: 40px;
  color: white;
  line-height: 40px;
  font-size: 18px;
  width: 35%;
  display: flex;
  justify-content: center;
`;

export const TextSection = styled.div`
  max-width: 970px;
  width: 100%;
  padding-bottom: 20px;
`;

export const HeaderText = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 30px;
  color: ${({ theme }) => theme.white};
`;

export const TextBlock = styled.div`
  max-width: 800px;
  margin-top: 30px;
  
  text-align: start;
  font-size: 25px;
  font-weight: 200;
  line-height: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  > span {
    color: ${({ theme }) => theme.white};
    > a {
      color: ${({ theme }) => theme.darkRed};
    }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  background: radial-gradient(636px at 49.2% 48.3%, rgb(116, 3, 0) 0%, rgb(55, 3, 0) 90%);
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 30px 0;
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
    margin-top: 60px;
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
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  > svg {
    margin-right: 20px;
  }
`;

export const MenuLeft = styled(Menu)`
  left: 50px;
`;

export const MenuRight = styled(Menu)`
  right: 50px;
`;

export const MenuBottom = styled(Menu)`
  bottom: 50px;
  width: 100%;
`;

export const Blob = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 800px) {
    > svg {
      display: none;
    }
  }
  &:hover {
    > svg {
      transform: scale(1.1);
    }
  }
`;

export const MenuText = styled.span`
  display: flex;

  justify-content: center;

  a {
    color: white;
    font-size: 70px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const SocialIcon = styled.div`
  @media screen and (max-width: 800px) {
    > a {
      font-size: 40px;
    }
  }
  &:hover {
    transform: scale(1.25);
  }
  transition: all 200ms ease-in-out;
`;

export const Blogs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
`;  