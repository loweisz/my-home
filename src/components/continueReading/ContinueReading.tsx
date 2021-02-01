import React, { useMemo } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const ArticleLinks = styled.div`
  padding: 16px 0;
  margin-bottom: 32px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 72px;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
  
`

const ArticleLink = styled(Link)`
  cursor: pointer;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 8px;
  font-size: 32px;
  color: ${({ theme }) => theme.darkRed}
`

const Wrapper = styled.div`
  margin-top: 48px;
  
`

const LinkTitle = styled.h2`
  margin: 0;
  text-decoration: underline;
  margin-bottom: 12px;
`
const LinkSubText = styled.span``
const ArticleBox = styled.div`
  border-radius: 12px;
  overflow: hidden;
  border: 4px solid ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.white};
`

const ImageWrapper = styled.div`
  max-height: 200px;
  overflow: hidden;
`

const ArticleContent = styled.div`
  padding: 25px;
`

const ArticleElement = ({ article }) => {
  if (!article) return null;
  return (
    <ArticleBox>
      <ArticleLink to={article.node.fields.slug}>
        {article.node.frontmatter.heroImage && (
          <ImageWrapper>
            <Img
              title="Avatar image"
              alt="Avatar Image"
              sizes={article.node.frontmatter.heroImage.childImageSharp.sizes}
            />
          </ImageWrapper>
        )}
        <ArticleContent>
          <LinkTitle>{article.node.frontmatter.title}</LinkTitle>
          <LinkSubText>{article.node.frontmatter.abstract}</LinkSubText>
        </ArticleContent>
      </ArticleLink>
    </ArticleBox>
  );
}

const ContinueReading = props => {
  const {  allMarkdownRemark: { edges } } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { type: { nin: ["exp", "edu"] } } }
        sort: { fields: frontmatter___index, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              abstract
              date
              heroImage {
                childImageSharp {
                  sizes(maxWidth: 1000) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
            timeToRead
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  const randomArticle = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * edges.length);
    return [edges[randomIndex], edges[randomIndex + 1 % edges.length]];
  }, [])

  console.log(randomArticle);
  return (
    <Wrapper>
      <Title>Continue Reading?</Title>
      <ArticleLinks>
        <ArticleElement article={randomArticle[0]} />
        <ArticleElement article={randomArticle[1]} />
      </ArticleLinks>
    </Wrapper>
  );
};

export default ContinueReading;
