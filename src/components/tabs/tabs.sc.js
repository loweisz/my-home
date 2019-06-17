import styled from 'styled-components';

export const InfoTabBar = styled.div`
  margin: 40px 150px;
  display: flex;
  justify-content: space-around;
  > a {
    text-decoration: none;
  }
`
export const Tab = styled.div`
  font-weight: 600;
  letter-spacing: 3px;
  height: 40px;
  color: white;
  line-height: 40px;
  font-size: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 10%;
  transition: all 0.3s ease-in-out;
  padding: 10px;
  cursor: pointer;
  font-weight: 200;
  font-family: 'Permanent Marker', sans-serif;
  background-color: ${({ color }) => color || '#660505'};
  text-decoration: none;
  &:hover {
    margin: 0;
    width: 120%;
    opacity: 0.7;
    color: white;
  }
`

export const Title = styled.div`
  font-size: 50px;
  font-weight: 400;
  font-family: 'Permanent Marker', sans-serif;
  &:hover {
    > span {
      &.mark {
        display: none;
      }
    }
  }
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