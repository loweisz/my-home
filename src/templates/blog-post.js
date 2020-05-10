import React from 'react';
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import Layout from '../components/layout';
import { DataText } from '../components/dev/experience.styles';
import { TextSection, InfoStarter } from '../styles/pages.sc';
import { Title, SubTitle, BlogPostBox, HeroImage, BlogHeader, PostTextSection } from './blog-post.styles';
import SEO from '../components/seo.helper'

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <InfoStarter>
      <SEO
        blogTitle={post.frontmatter.title}
        description={post.frontmatter.abstract}
      />
        <PostTextSection>
          <BlogPostBox className="shown">
            <article>
              {post.frontmatter.heroImage && (
                <HeroImage>
                  <Img
                    title="Avatar image"
                    alt="Avatar Image"
                    sizes={post.frontmatter.heroImage.childImageSharp.sizes}
                  />
                </HeroImage>
              )}
              <BlogHeader>
                <Title>{post.frontmatter.title}</Title>
                <SubTitle>{post.frontmatter.abstract}</SubTitle>
              </BlogHeader>
              <DataText dangerouslySetInnerHTML={{ __html: post.html }} />
              <hr />
            </article>
          </BlogPostBox>
        </PostTextSection>
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
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1000 ) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
    
  }
`;
