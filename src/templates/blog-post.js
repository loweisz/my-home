import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import { DataText } from '../components/dev/experience.styles';
import { InfoStarter } from '../styles/pages.sc';
import {
  Title,
  SubTitle,
  BlogPostBox,
  HeroImage,
  BlogHeader,
  PostTextSection,
  Info,
  InfoBlock
} from './blog-post.styles';
import SEO from '../components/seo.helper';
import ShareWidget from '../components/shareWidget/ShareWidget';

import { FiCalendar, FiClock } from 'react-icons/fi';
import BlogFooter from '../components/blogFooter/BlogFooter';
import Newsletter from '../components/newsletter/Newsletter';

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const image = post.frontmatter.heroImage ? post.frontmatter.heroImage.childImageSharp.resize : null;

  const posts = post.html.split("NEWSLETTER");

  return (
    <Layout fixed={false}>
      <InfoStarter>
        <SEO
          title={post.frontmatter.title}
          blogTitle={post.frontmatter.title}
          description={post.frontmatter.abstract}
          pathname={post.fields.slug}
          image={image}
        />
        <PostTextSection>
          <BlogPostBox className="shown">
            <ShareWidget location={props.location} post={post} />
            <article>
              <BlogHeader>
                <Title>{post.frontmatter.title}</Title>
                <SubTitle>{post.frontmatter.abstract}</SubTitle>
                <InfoBlock>
                  <Info>
                    <div>
                      <FiCalendar /> <span>{post.frontmatter.date}</span>
                    </div>
                    <div>
                      <FiClock /> <span>{post.timeToRead}min</span>
                    </div>
                  </Info>
                </InfoBlock>
              </BlogHeader>
              {post.frontmatter.heroImage && (
                <HeroImage>
                  <Img
                    title="Avatar image"
                    alt="Avatar Image"
                    sizes={post.frontmatter.heroImage.childImageSharp.sizes}
                  />
                </HeroImage>
              )}
              <DataText dangerouslySetInnerHTML={{ __html: posts[0] }} />
              <Newsletter />
              {posts[1] && <DataText dangerouslySetInnerHTML={{ __html: posts[1] }} />}
              <hr />
              <BlogFooter location={props.location} post={post} />
            </article>
          </BlogPostBox>
        </PostTextSection>
      </InfoStarter>
    </Layout>
  );
};

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
      timeToRead
      fields {
        slug
      }
      frontmatter {
        title
        date
        abstract
        heroImage {
          childImageSharp {
            sizes(maxWidth: 1000) {
              ...GatsbyImageSharpSizes
            }
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;
