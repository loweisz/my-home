import styled from 'styled-components';

export const Divider = styled.div``


export const PostContainer = styled.article`
  color: ${({ theme }) => theme.white};
`;

export const PostTextSection = styled.div`
  max-width: 970px;
  width: 100%;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  font-family: Mosk;
  font-size: 57px;
  font-weight: 900;
  line-height: 67px;
  margin: 10px 0 30px 0;
  color: ${({ theme }) => theme.black};
  @media screen and (max-width: 800px) {
    font-size: 32px;
    line-height: 38px;
  }
`;

export const Info = styled.div`
  margin-top: 24px;
  color: ${({ theme }) => theme.black};
  font-size: 18px;
  display: flex;
  > div {
    display: flex;
    align-items: center;
    margin-right: 20px;

    > span {
      margin-left: 5px;
    }
  }
`;

export const InfoBlock = styled.div``;

export const SubTitle = styled.span`
  color: ${({ theme }) => theme.darkRed};
  padding-bottom: 40px;
  font-size: 24px;
  line-height: 28px;
`;
export const BlogPostBox = styled.article`
  overflow: hidden;
  border-radius: 5px;
  line-height: 1.5;
  text-align: start;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  flex: 1;
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
  }
  hr {
    display: none;
  }
  &:hover {
    box-shadow: none;
  }
`;

export const HeroImage = styled.div`
  max-height: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 45px;
`;

export const BlogHeader = styled.header`
  margin-top: 32px;
  margin-bottom: 32px;
  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;
