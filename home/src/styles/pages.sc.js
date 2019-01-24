import styled, { keyframes } from 'styled-components';

export const TabIcon = styled.img`
  color: white;
  margin-left: 10px;
`

export const slideIn = keyframes`
  from {
    margin-left: -300px;
  }
`
export const InfoStarter = styled.div`
  width: 70%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`
export const InfoTabBar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`
export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`
export const Tab = styled.div`
  background-color: #5A8AB2;
  height: 40px;
  color: white;
  line-height: 40px;
  font-size: 18px;
  width: 35%;
  display: flex;
  justify-content: center;
`
export const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
`
export const SubTitle = styled.div`
  line-height: 18px;
  font-size: 20px;
  font-weight: 100;
`
export const TextSection = styled.div`
  padding: 50px 100px;
  
`
export const HeaderText = styled.div`
  margin-bottom: 15px;
  font-weight: 600;
  &::after {
    content: '';
    width: 40px;
    height: 20px;
    background-color: #5A8AB2;
  }
`;
export const TextBlock = styled.div`
  padding: 30px;
  font-size: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 50px -15px rgba(0,0,0,0.75);
  background-color: white;
  display: flex;
  flex-direction: column;
`