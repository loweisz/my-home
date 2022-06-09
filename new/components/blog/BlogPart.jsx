import React from 'react';

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
import Link from 'next/link';
import Image from 'next/image';

function BlogPart({ post }) {
  const tilt = Math.random() > 0.5 ? -1 : 1
  return (
    <WrapperBG tilt={tilt}>
    <Background tilt={tilt} />
      <Box>
      <Link href={post.slug}>
        <BlogBox>
          <TextSection>
            {post.coverImage && (
              <ImagePreview>
                <img src={post.coverImage.url} />
              </ImagePreview>
            )}
            <Title>{post.title}</Title>
            <Abstract>{post.abstract}</Abstract>
            <AdditionalInfo>
              <Date>
                <FiCalendar />
                <span>{post.date}</span>
              </Date>
              <Divider />
              <Date>
                <FiClock />
                {/*<span>{node.timeToRead} min</span>*/}
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
