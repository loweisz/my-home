import styled from 'styled-components';

export const InfoTabBar = styled.div`
  display: flex;
  justify-content: center;
  letter-spacing: 0;
  font-weight: 900;
  font-size: 30px;
  > a {
    text-decoration: none;
  }
`;

export const TabSection = styled.div`
  width: 100%;
  background: radial-gradient(circle, ${({ theme }) => theme.white} 0%, ${({ theme }) => theme.white} 70%);
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const Tab = styled.div`
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
  &:hover {
    text-decoration: underline;
    background-color: ${({ theme }) => theme.background};
  }
`;
