import React from 'react';
import * as SC from '../styles/pages.sc';
import Layout from '../components/layout';
import BlogPart from '../components/blog/BlogPart';

const BlogPage = (props) => (
  <Layout>
    <SC.Wrapper>
        <SC.InfoStarter>
          <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Here are some of my recent ideas and thoughts:</SC.HeaderText>
            </SC.TextBlock>
          </SC.TextSection>
          <SC.TextSection>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogPart node={node} />
            ))}
          </SC.TextSection>
        </SC.InfoStarter>
      </SC.Wrapper>
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
