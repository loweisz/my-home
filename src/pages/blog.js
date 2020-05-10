import React from 'react';
import { Wrapper, InfoStarter, TextBlock, HeaderText, TextSection, Blogs } from '../styles/pages.sc';
import Layout from '../components/layout';
import BlogPart from '../components/blog/BlogPart';
import SEO from "../components/seo.helper"

const BlogPage = (props) => (
  <Layout>
    <SEO 
      title="Blog"
      description="My personal blog two write down my thoughts, ideas and explanations mostly about working as a software developer"
    />
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
              <BlogPart key={node.id} node={node} />
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
