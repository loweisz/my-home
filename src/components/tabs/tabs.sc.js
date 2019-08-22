import styled from 'styled-components';

export const InfoTabBar = styled.div`
  margin: 40px 150px;
  display: flex;
  justify-content: center;
  > a {
    margin: 0 20px;
    text-decoration: none;
  }
`
export const Tab = styled.div`
  font-weight: 400;
  letter-spacing: 3px;
  height: 40px;
  color: black;
  line-height: 40px;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 10%;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  &:hover {
    text-decoration: underline;
    background-color: white;
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
