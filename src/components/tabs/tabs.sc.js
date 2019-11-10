import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    margin-top: -50px;
  }
  to {
    margin-top: 0;
  }
`;

export const InfoTabBar = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 30px;
  // animation: ${slideIn} 150ms ease-in;
  > a {
    margin: 0 20px;
    text-decoration: none;
  }
`;

export const TabSection = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, ${({ additionalOpacity }) => 0.6 + additionalOpacity});
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Tab = styled.div`
  font-weight: 400;
  letter-spacing: 3px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  padding: 0 10px;
  cursor: pointer;
  text-decoration: none;
  transition: all 200ms ease;
  &:hover {
    text-decoration: underline;
    background-color: rgba(55, 3, 0, 0.5);
    color: white;
  }
`;
