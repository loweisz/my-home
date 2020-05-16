import styled from 'styled-components';
import { Box } from '../styles/shared';

export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white};
`;

export const PostTextSection = styled.div`
  max-width: 970px;
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 42px;
  line-height: 48px;
  margin: 10px 0 30px 0;
  color: ${({ theme }) => theme.black};
  @media screen and (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Info = styled.div`
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.grey};
  color: ${({ theme }) => theme.black};
`;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.red};
  padding-bottom: 40px;
  font-size: 24px;
  line-height: 28px;
`;
export const BlogPostBox = styled(Box)`
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  flex: 1;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  &:hover {
    box-shadow: none;
  }
`;

export const HeroImage = styled.div`
  max-height: 400px;
  overflow: hidden;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.black};
  margin-bottom: 45px;
`;

export const BlogHeader = styled.header`
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;
