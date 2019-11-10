import styled from 'styled-components';

export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white}
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 60px;
  margin: 20px 0 0 0;
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.red};
  padding-bottom: 40px;
  font-size: 25px;
  line-height: 20px;
`