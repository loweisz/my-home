import styled from 'styled-components';
import { Box } from '../styles/shared';

export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white};
`;

export const Title = styled.h1`
  font-size: 42px;
  line-height: 48px;
  margin: 10px 0 30px 0;
  color: ${({ theme }) => theme.black};
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.red};
  padding-bottom: 40px;
  font-size: 32px;
  line-height: 38px;
`;
export const BlogPostBox = styled(Box)`
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  flex: 1;
`;
