import React from 'react';
import Layout from '../components/layout';
import { Wrapper, InfoStarter, TextSection, TextBlock, HeaderText } from '../styles/pages.sc';
import { graphql } from 'gatsby';
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Welcome"
        description="Welcome to my website"
      />
      <Wrapper>
        <InfoStarter>
          <TextSection>
            <TextBlock>
              <HeaderText>Hi,</HeaderText>
              <span>
                Nice to meet you. <br />
                My name is Lorenz, I'm working as a Software Developer and write or think a lot about code,
                technology and sometimes stupid and{' '}
                <a target="_blank" rel="noopener noreferrer" href="https://9gag.com/gag/aBg0ZVD">
                  random things.
                </a>{' '}
                <br />
                <br /> Most of the time when I'm sitting at my computer I also listen to a lot of different{' '}
                <a href="https://open.spotify.com/user/mizztersc" rel="noopener noreferrer" target="_blank">
                  music
                </a>{' '}
                or try to draw or paint something. I'm also planing to create a section on this website for
                this, but for now it's mostly about coding and working as a software developer. If you want to
                connect with me, feel free to contact me on any of the social media links on this site or
                write me an <a href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">email</a>.
              </span>
            </TextBlock>
          </TextSection>
        </InfoStarter>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { ne: "exp" } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            abstract
            date
          }
          timeToRead
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;
