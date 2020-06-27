import React from 'react';
import Img from 'gatsby-image';
import { RoughNotation } from 'react-rough-notation';
import Layout from '../components/layout';
import {
  Wrapper,
  InfoStarter,
  TextSection,
  TextBlock,
  HeaderText,
  IntroText,
  HiLink,
  AvatarImage,
} from '../styles/pages.sc';
import { graphql } from 'gatsby';
import SEO from '../components/seo.helper';
import Newsletter from '../components/newsletter/Newsletter';
import useDelayedAnimation from '../hooks/useDelayedAnimation';

const IndexPage = ({ data }) => {
  const showAnimation = useDelayedAnimation(1000);

  return (
    <Layout>
      <SEO title="Welcome" description="Welcome to my website" />
      <Wrapper>
        <InfoStarter>
          <TextSection>
            <AvatarImage>
              <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
            </AvatarImage>
            <TextBlock>
              <HeaderText>
                <RoughNotation strokeWidth="4" type="underline" show={showAnimation}>
                  Hey there,
                </RoughNotation>
              </HeaderText>
              <IntroText>
                Nice to meet you.
                <br />
                My name is{' '}
                <RoughNotation strokeWidth="4" type="underline" show={showAnimation}>
                  Lorenz
                </RoughNotation>
                <br />
                I'm a frontend focused
                <br />
                <RoughNotation strokeWidth="4" type="underline" show={showAnimation}>
                  Web Engineer
                </RoughNotation>{' '}
                living in <br />
                <RoughNotation strokeWidth="4" type="underline" show={showAnimation}>
                  Berlin.
                </RoughNotation>
                <br />
                <br />
                <HiLink href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">Say Hi</HiLink>
              </IntroText>
            </TextBlock>
          </TextSection>
          <Newsletter />
        </InfoStarter>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    avatarImage: file(relativePath: { eq: "data/avatar.png" }) {
      childImageSharp {
        sizes(maxWidth: 472) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
