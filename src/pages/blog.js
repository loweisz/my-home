import React from 'react';
import { Wrapper, InfoStarter, TextBlock, HeaderText, TextSection, Blogs } from '../styles/pages.sc';
import Layout from '../components/layout';
import BlogPart from '../components/blog/BlogPart';

const BlogPage = (props) => (
  <Layout>
    <Wrapper>
      <InfoStarter>
        <TextSection>
          <TextBlock>
            <HeaderText>Here are some of my recent ideas and thoughts:</HeaderText>
          </TextBlock>
        </TextSection>
        <TextSection>
          <Blogs>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogPart node={node} />
            ))}
          </Blogs>
        </TextSection>
      </InfoStarter>
    </Wrapper>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { nin: ["exp", "edu"] } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            abstract
            date
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
`;
