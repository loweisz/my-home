import styled, {keyframes} from 'styled-components';

export const InfoStarter = styled.div`
  height: 100vh;
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
`;

const opacIn = keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`;

export const PageHeader = styled.h1`
  color: white;
  text-align: start;
  animation: ${opacIn} 150ms ease-in;
`

export const SubHeader = styled.p`
  max-width: 800px;
  color: white;
  text-align: start;
  animation: ${opacIn} 350ms ease-in;
`

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
  max-width: 800px;
  width: 100%;
`;

export const HeaderText = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 30px;
`;

export const TextBlock = styled.div`
  max-width: 800px;
  margin-top: 30px;
  color: white;
  text-align: start;
  font-size: 25px;
  font-weight: 200;
  line-height: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;
