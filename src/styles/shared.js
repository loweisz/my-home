import styled from 'styled-components';

export const Box = styled.article`
  padding: 25px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  overflow: hidden;
  border-radius: 5px;
  line-height: 1.5;
  transition: box-shadow 400ms ease-in-out;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  &:hover {
    transform: scale(1.01);
    transition: all 250ms ease;
    box-shadow: rgba(0,0,0,0.2) 0px 9px 12px 10px;
  }

  hr {
    display: none;
  }
`;
