import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import {
  Abstract,
  AdditionalInfo,
  Background,
  BlogBox,
  Date,
  Divider,
  ImagePreview,
  TextSection,
  Title,
  WrapperBG,
} from './blogPart.style';
import { Box } from '../../styles/shared';
import { FiCalendar, FiClock } from 'react-icons/fi';

function BlogPart({ node }) {
  return (
    <WrapperBG>
    <Background />
      <Box>
      <Link to={node.fields.slug}>
        <BlogBox>
          <TextSection>
            {node.frontmatter.heroImage && (
              <ImagePreview>
                <Img
                  title="Avatar image"
                  alt="Avatar Image"
                  sizes={node.frontmatter.heroImage.childImageSharp.sizes}
                />
              </ImagePreview>
            )}
            <Title>{node.frontmatter.title}</Title>
            <Abstract>{node.frontmatter.abstract}</Abstract>
            <AdditionalInfo>
              <Date>
                <FiCalendar />
                <span>{node.frontmatter.date}</span>
              </Date>
              <Divider />
              <Date>
                <FiClock />
                <span>{node.timeToRead} min</span>
              </Date>
            </AdditionalInfo>
          </TextSection>
        </BlogBox>
      </Link>
    </Box>
    </WrapperBG>
  );
}

export default BlogPart;
