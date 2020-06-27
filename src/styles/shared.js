import styled from 'styled-components';

export const Box = styled.article`
  padding: 25px;
  border: 4px solid ${({ theme }) => theme.black};
  box-shadow: 6px 6px 0 0 ${({ theme }) => theme.black};
  overflow: hidden;
  border-radius: 5px;
  line-height: 1.5;
  background: ${({ theme }) => theme.background};
  transition: box-shadow 400ms ease-in-out;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  &:hover {
    transform: translate(-4px, -4px);
    transition: all 250ms ease;
    box-shadow: 10px 10px 0 0 ${({ theme }) => theme.black};
  }

  hr {
    display: none;
  }
`;
