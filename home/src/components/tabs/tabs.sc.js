import styled from 'styled-components';

export const InfoTabBar = styled.div`
  margin: 40px 150px;
  display: flex;
  justify-content: space-around;
`
export const Tab = styled.div`
  font-weight: 600;
  letter-spacing: 3px;
  height: 40px;
  color: #5A8AB2;
  line-height: 40px;
  font-size: 40px;
  width: 15%;
  display: flex;
  justify-content: center;
  margin: 0 5%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font-weight: 200;
  font-family: 'Permanent Marker', sans-serif;
  &:hover {
    width: 25%;
    margin: 0;
    opacity: 0.7;
    background-color: #5A8AB2;
    color: white;
  }
`
export const Title = styled.div`
  font-size: 40px;
  font-weight: 400;
  font-family: 'Permanent Marker', sans-serif;
`
export const SubTitle = styled.div`
  line-height: 18px;
  font-size: 20px;
  font-weight: 100;
`
export const TabIcon = styled.img`
  color: white;
  margin-left: 10px;
`