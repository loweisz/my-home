import React from 'react';
import { Title, Wrapper, SubTitle, TwitterIcon } from './blogFooter.styles';
import { IoLogoTwitter } from 'react-icons/io';

function BlogFooter({ post }) {
  function clickShare() {
    window.open(this.href, 'twitter-share', 'width=550,height=235');
    return false;
  }
  const prodUrl = 'https://www.lorenzweiss.de' + post.fields.slug;
  const tweetLink = `https://twitter.com/share?text=${post.frontmatter.title} by @loweisz&url=${prodUrl}`;

  return (
    <Wrapper>
      <Title>Hey! Thank you for reading! </Title>
      <span>
        You liked, hated or even loved this post? Let the world know about your feelings and share it on
        twitter
      </span>
      <SubTitle>Just hit the little bird:</SubTitle>
      <a href={tweetLink} onClick={clickShare}>
        <TwitterIcon>
          <IoLogoTwitter />
        </TwitterIcon>
      </a>
    </Wrapper>
  );
}

export default BlogFooter;
