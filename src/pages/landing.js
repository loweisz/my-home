import React from 'react';
import Img from 'gatsby-image';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';
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
  LandingHeaderText,
} from '../styles/pages.sc';
import { graphql } from 'gatsby';
import SEO from '../components/seo.helper';
import Newsletter from '../components/newsletter/Newsletter';
import useDelayedAnimation from '../hooks/useDelayedAnimation';

const IndexPage = ({ data }) => {
  const showAnimation = useDelayedAnimation(400);

  return (
    <Layout>
      <SEO title="Welcome" description="Welcome to my website" />
      <Wrapper>
        <InfoStarter>
          <TextSection>
            <RoughNotationGroup show={showAnimation}>
              <TextBlock>
                <LandingHeaderText>
                  <RoughNotation strokeWidth="4" type="underline">
                    <span>Hey there,</span>
                  </RoughNotation>
                  <AvatarImage>
                    <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
                  </AvatarImage>
                </LandingHeaderText>
                <IntroText>
                  Nice to meet you.
                  <br />
                  My name is{' '}
                  <RoughNotation strokeWidth="4" type="underline">
                    Lorenz
                  </RoughNotation>
                  <br />
                  I'm a frontend focused
                  <br />
                  <RoughNotation strokeWidth="4" type="underline">
                    Web Engineer
                  </RoughNotation>{' '}
                  living in <br />
                  <RoughNotation strokeWidth="4" type="underline">
                    Berlin.
                  </RoughNotation>
                  <br />
                  <br />
                  <HiLink href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">Say Hi</HiLink>
                </IntroText>
              </TextBlock>
            </RoughNotationGroup>
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
