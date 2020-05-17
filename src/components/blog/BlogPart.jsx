import React from 'react';
import Img from "gatsby-image"
import { Link } from 'gatsby';
import { BlogBox, Title, TextSection, Date, Abstract, AdditionalInfo, ImagePreview } from './blogPart.style';
import { Box } from '../../styles/shared';
import { FiCalendar, FiClock } from 'react-icons/fi';


function BlogPart({ node }) {
  return (
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
              <Date>
                <FiClock />
                <span>{node.timeToRead} min</span>
              </Date>
            </AdditionalInfo>
          </TextSection>
        </BlogBox>
      </Link>
    </Box>
  );
}

export default BlogPart;
