import styled, { keyframes, css } from 'styled-components';

export const InfoTabBar = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  font-weight: 900;
  font-family: Mosk, sans-serif;
  > a {
    text-decoration: none;
  }
`;

export const TabSection = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  opacity: 0.9;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const iconJump = ({ theme }) => keyframes`
  50% {
    margin-left: -15px;
    margin-right: 15px;
  }
  100% {
    color: ${theme.black};
  }
`;

export const TabInner = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  position: relative;
  svg {
    color: ${({ theme }) => theme.red};
  }
  text-shadow: 2px 0 ${({ theme }) => theme.white}, -2px 0 ${({ theme }) => theme.white},
    -2px -2px ${({ theme }) => theme.white}, 2px 2px ${({ theme }) => theme.white},
    -2px 2px ${({ theme }) => theme.white}, 0 2px ${({ theme }) => theme.white},
    2px 0 ${({ theme }) => theme.white}, 0 -2px ${({ theme }) => theme.white};
  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    width: 0;
    height: 3px;
    background: ${({ theme }) => theme.red};
    bottom: 0px;
    right: -5px;
    transition: all 500ms ease;
    border-radius: 5px;
  }
  span {
    z-index: 2;
  }
`;

export const TabElement = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-shrink: 0;
  padding: 0 30px;
  cursor: pointer;
  text-decoration: none;
  background-color: transparent;
  transition: all 600ms ease;
`;
