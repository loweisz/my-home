import styled from 'styled-components';
import { Box } from '../styles/shared';

export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white};
`;

export const PostTextSection = styled.div`
  max-width: 970px;
  width: 100%;
  padding-bottom: 20px;
`

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
  @media screen and (max-width: 800px) {
    background: transparent;
    border: none;
    box-shadow: none;
    padding: 0;
  }
`;

export const HeroImage = styled.div`
  margin-left: -25px;
  margin-top: -25px;
  margin-right: -15px;
  max-height: 400px;
  overflow: hidden;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  @media screen and (max-width: 800px) {
    margin-top: -60px;
  }
`

export const BlogHeader = styled.header`
  margin-top: 32px;
`