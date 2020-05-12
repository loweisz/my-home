import styled from 'styled-components';

export const IconContainer = styled.div`
  height: 60px;
  width: 60px;
  flex: 1;

  position: relative;
  > svg {
    position: absolute;
    transition: all 500ms ease;
    left: 14px;
  }
  .moon {
    margin-top: ${({ shown }) => (shown ? '-60px' : '12px')};
  }
  .sun {
    margin-top: ${({ shown }) => (!shown ? '-60px' : '12px')};
  }
`;

export const ThemeButton = styled.button`
  position: fixed;
  bottom: 16px;
  left: 0;
  border: none;
  font-size: 34px;
  margin-left: 24px;
  background: ${({ theme }) => theme.black};
  transition: background 500ms ease;
  border-radius: 50%;
  height: 60px;
  width: 60px;
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
  @media screen and (max-width: 800px) {
    bottom: 22px;
  }
`;
