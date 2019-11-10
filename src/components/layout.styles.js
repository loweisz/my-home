import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  z-index: 2;
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
`;

export const BodySection = styled.main`
  margin-top: 200px;
  @media screen and (max-width: 800px) {
    margin-top: 60px;
    padding: 15px;
  }
`;
