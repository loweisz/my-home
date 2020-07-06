import React from 'react';
import NewsletterForm from './NewsletterForm'
import {NewsletterBox, Header, Subline, Welcome, Wrapper, Content, AvatarImage } from './newsletter.styles';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const NewsletterHeader = () => {
  return (
    <Header>
      <Welcome>Get Content, helpful articles and links.</Welcome>
      <Subline>Usually I sent out 1-2 mails per months. No spam or ads I promise 🤞</Subline>
    </Header>
  )
};

const Newsletter = () => {
  const data = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "data/avatar.png" }) {
          childImageSharp {
            sizes(maxWidth: 472) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `,
  );
  return (
    <Wrapper>
      <AvatarImage>
        <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
      </AvatarImage>
      <NewsletterBox>
        <NewsletterHeader />
        <NewsletterForm />
      </NewsletterBox>
    </Wrapper>
  )
};

export default Newsletter;
