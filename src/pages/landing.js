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
  LandingHeaderText, HiContainer, Greetings, LandingTextBlock,
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
            <LandingTextBlock>
              <IntroText>
                <RoughNotationGroup show={showAnimation}>
                  <Greetings>
                    <span>
                      <Annotation strokeWidth="4" type="underline">
                        Hey there,
                      </Annotation>
                    </span>
                  </Greetings>
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
                </RoughNotationGroup>
              </IntroText>
              <LandingHeaderText>
                <AvatarImage>
                  <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
                </AvatarImage>
                <HiContainer>
                  <Annotation strokeWidth="4" type="circle" show={showAnimation}>
                    <HiLink href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">Say Hi</HiLink>
                  </Annotation>
                </HiContainer>
              </LandingHeaderText>
            </LandingTextBlock>
          </TextSection>
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
