import React from 'react';
import { Link } from 'gatsby';
import { BlogBox, Title, TextSection, Date, Abstract, AdditionalInfo } from './blogPart.style';
import { Box } from '../../styles/shared';
import { FiCalendar, FiClock } from 'react-icons/fi';

function BlogPart({ node }) {
  return (
    <Box>
      <Link to={node.fields.slug}>
        <BlogBox>
          <TextSection>
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
