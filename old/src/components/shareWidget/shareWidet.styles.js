import styled, { keyframes } from 'styled-components';

export const ShareBoard = styled.div`
  position: fixed;
  left: 0;
  padding: 20px;
  top: 50%;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.black};
  @media screen and (max-width: 800px) {
    width: 100px;
    top: initial;
    left: calc(50% - 50px);
    bottom: 40px;
    flex-direction: row;
    display: none;
  }
`;

export const CopyElement = styled.div`
  position: relative;
  cursor: pointer;
`;

const fadeIn = keyframes`
  from {
    top: 28px;
    opacity: 0;
  }
`;

export const SuccessBox = styled.div`
  position: absolute;
  width: 140px;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.background};
  font-size: 12px;
  right: -162px;
  border-radius: 4px;
  text-align: center;
  top: 8px;
  padding: 4px;
  opacity: 0.8;
  animation: ${fadeIn} 200ms ease-in;
`;
