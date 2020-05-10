import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { DataText } from '../components/dev/experience.styles';
import { TextSection, InfoStarter } from '../styles/pages.sc';
import { Title, SubTitle, BlogPostBox } from './blog-post.styles';
import SEO from '../components/SEO'

const BlogPostTemplate = (props) => {
  
    const post = props.data.markdownRemark;
    return (
      <Layout>
        <InfoStarter>
        <SEO
          blogTitle={post.frontmatter.title}
          description={post.frontmatter.abstract}
        />
          <TextSection>
            <BlogPostBox className="shown">
              <article>
                <header>
                  <Title>{post.frontmatter.title}</Title>
                  <SubTitle>{post.frontmatter.abstract}</SubTitle>
                </header>
                <DataText dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr />
              </article>
            </BlogPostBox>
          </TextSection>
        </InfoStarter>
      </Layout>
    );
  
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        abstract
      }
    }
  }
`;
