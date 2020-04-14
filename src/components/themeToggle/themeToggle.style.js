import styled, { keyframes } from 'styled-components';

export const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  flex: 1;

  position: relative;
  > svg {
    position: absolute;
    transition: all 500ms ease;
    left: 8px;
  }
  .moon {
    margin-top: ${({ shown }) => (shown ? '-40px' : '6px')};
  }
  .sun {
    margin-top: ${({ shown }) => (!shown ? '-40px' : '6px')};
  }
`;

export const ThemeButton = styled.button`
  position: fixed;
  bottom: 24px;
  left: 12px;
  border: none;
  font-size: 24px;
  margin-left: 24px;
  background: ${({ theme }) => theme.black};
  border-radius: 50%;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
  overflow: hidden;
  &:focus {
    outline: none;
  }
`;
