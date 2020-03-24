import styled from 'styled-components';
import { moveFadeIn, opacIn } from './animations';

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
  color: ${({ theme }) => theme.black};
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
  color: ${({ theme }) => theme.black};
`;

export const TextBlock = styled.div`
  margin-top: 30px;
  text-align: start;
  font-size: 25px;
  font-weight: 200;
  line-height: 40px;
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
`;

export const Blogs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  width: 100%;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
