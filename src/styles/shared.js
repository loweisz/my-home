import styled from 'styled-components';

export const Box = styled.article`
  padding: 25px;
  background-color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 5px;
  line-height: 1.5;
  transition: box-shadow 400ms ease-in-out;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  }

  hr {
    display: none;
  }
`;
