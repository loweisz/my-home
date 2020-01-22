import styled from 'styled-components';

export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white}
`;

export const Title = styled.h1`
  font-size: 42px;
  line-height: 48px;
  margin: 10px 0 30px 0;
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.red};
  padding-bottom: 40px;
  font-size: 32px;
  line-height: 38px;
`