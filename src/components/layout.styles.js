import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  z-index: 2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;
`;

export const TopSection = styled.header`
  @media screen and (max-width: 800px) {
    position: initial;
  }
  position: fixed;
  height: 100px;
  width: 100vw;
  z-index: 10;
`;

export const MobileSocial = styled.div`
  margin-top: -40px;
  margin-bottom: 20px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const BodySection = styled.main`
  margin-top: 140px;
  padding: 15px 15px 50px 15px;
  flex: 1;
  z-index: 5;

  @media screen and (max-width: 800px) {
    margin-top: 60px;
    padding: 15px 15px 100px 15px;
  }
`;

export const Wave = styled.div`
  margin-top: 100px;
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 0px;
  color: ${({ theme }) => theme.white};

  @media screen and (max-width: 800px) {
    margin-top: -30px;
    position: initial;
  }
`;
