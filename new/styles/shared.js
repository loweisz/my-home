import styled from 'styled-components';

export const Box = styled.article`
  padding: 25px;
  border: 4px solid ${({ theme }) => theme.black};
  
  overflow: hidden;
  border-radius: 5px;
  line-height: 1.5;
  z-index: 2;
  background: ${({ theme }) => theme.red};
  height: 100%;
  box-sizing: border-box;
  transition: box-shadow 400ms ease-in-out;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  &:hover {
    transform: translate(-4px, -4px);
    transition: all 250ms ease;
    
  }

  hr {
    display: none;
  }
  @media screen and (max-width: 800px) {
    margin-right: 6px;
  }
`;
