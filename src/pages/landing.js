import React from 'react';
import Img from 'gatsby-image';
import { RoughNotationGroup } from 'react-rough-notation';
import Annotation from '../components/Annotation';
import Layout from '../components/layout';
import {
  Wrapper,
  InfoStarter,
  TextSection,
  TextBlock,
  IntroText,
  HiLink,
  AvatarImage,
  LandingHeaderText, HiContainer,
} from '../styles/pages.sc';
import { graphql } from 'gatsby';
import SEO from '../components/seo.helper';
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
                  <Annotation strokeWidth="4" type="underline">
                    <span>Hey there,</span>
                  </Annotation>
                  <AvatarImage>
                    <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
                  </AvatarImage>
                </LandingHeaderText>
                <IntroText>
                  Nice to meet you.
                  <br />
                  My name is{' '}
                  <Annotation strokeWidth="4" type="underline">
                    Lorenz
                  </Annotation>
                  <br />
                  I'm a frontend focused
                  <br />
                  <Annotation strokeWidth="4" type="underline">
                    Web Engineer
                  </Annotation>{' '}
                  living in <br />
                  <Annotation strokeWidth="4" type="underline">
                    Berlin.
                  </Annotation>
                  <br />
                  <br />
                </IntroText>
              </TextBlock>
            </RoughNotationGroup>
          </TextSection>
          <HiContainer>
            <HiLink href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">Say Hi</HiLink>
          </HiContainer>
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
