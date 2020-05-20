import React from 'react';
import Layout from '../components/layout';
import { Wrapper, InfoStarter, TextSection, TextBlock, HeaderText } from '../styles/pages.sc';
import { graphql } from 'gatsby';
import SEO from '../components/seo.helper';

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Welcome" description="Welcome to my website" />

      <Wrapper>
        <InfoStarter>
          <TextSection>
            <TextBlock>
              <HeaderText>Hi,</HeaderText>
              <span>
                Nice to meet you. My name is Lorenz
                <br />
                I'm a frontend focused Web Engineer and write or think a lot about code, technology and many
                other things.
                <br />
                <br />
                Currently I'm working mostly with ReactJS, Svelte, Vue, Go and Javascript in general.
                <br />
                <br /> Most of the time when I'm sitting at my computer I also listen to a lot of different{' '}
                <a href="https://open.spotify.com/user/mizztersc" rel="noopener noreferrer" target="_blank">
                  music
                </a>{' '}
                or try to draw or paint something. But this website is mostly about coding and working as a
                software engineer.
                <br />
                <br />
                <a href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">Say Hi</a>.
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
