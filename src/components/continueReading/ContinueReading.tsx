import React, { useMemo } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const ArticleLinks = styled.div`
  border-top: 1px solid ${({ theme }) => theme.grey};
  border-bottom: 1px solid ${({ theme }) => theme.grey};
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

`

const ArticleElement = ({ article }) => (
  <ArticleBox>
    <ArticleLink>
      <LinkTitle>{article.node.frontmatter.title}</LinkTitle>
      <LinkSubText>{article.node.frontmatter.abstract}</LinkSubText>
    </ArticleLink>
  </ArticleBox>
)

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
