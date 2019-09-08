import styled from 'styled-components';

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
  margin-top: 30px;
  max-width: 800px;
  width: 100%;
`;

export const HeaderText = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 30px;
  &::after {
    content: '';
    width: 40px;
    height: 20px;
    background-color: #5A8AB2;
  }
`;

export const TextBlock = styled.div`
  color: white;
  text-align: start;
  font-size: 25px;
  font-weight: 200;
  line-height: 40px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;