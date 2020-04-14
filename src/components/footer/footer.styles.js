import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 14px;
  font-size: 12px;
  color: ${({ theme }) => theme.grey};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  > span {
    flex: 1;
  }
`;
