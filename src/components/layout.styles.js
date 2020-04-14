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

export const BodySection = styled.main`
  margin-top: 140px;
  padding: 15px 15px 50px 15px;
  flex: 1;

  @media screen and (max-width: 800px) {
    margin-top: 0px;
  }
`;
