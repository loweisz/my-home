import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.white};
  padding: 14px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.darkRed};
  border-top: 5px solid ${({ theme }) => theme.black};
  box-sizing: border-box;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;

export const FooterInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    flex: 1;
  }
`;
