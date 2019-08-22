import styled from 'styled-components';

export const InfoStarter = styled.div`
  height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
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
`

export const TextSection = styled.div`
  padding: 0 200px;
  
`
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
  text-align: start;
  padding: 30px;
  font-size: 25px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
