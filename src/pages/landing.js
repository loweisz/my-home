import React from 'react';
import Layout from '../components/layout';

import * as SC from '../styles/pages.sc';
import { graphql, Link } from 'gatsby';
import Experience from '../components/dev/Experience';
import { DataText, ExperienceBox } from '../components/dev/experience.styles';
import BlogPart from '../components/blog/BlogPart';

const IndexPage = (props) => {
  console.log(props.data);
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
        <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Here are some of my recent ideas and thoughts:</SC.HeaderText>
            </SC.TextBlock>
          </SC.TextSection>
          <SC.TextSection>
            {props.data.allMarkdownRemark.edges.map(({ node }) => (
              <BlogPart node={node} />
            ))}
          </SC.TextSection>
          <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Hi,</SC.HeaderText>
              <span>
                Nice to meet you. <br />
                My name is Lorenz, I'm from the south of germany and currently living in Berlin. <br />I work
                as a Software Developer and write or think a lot about code, technology and sometimes stupid
                and{' '}
                <a target="_blank" href="https://9gag.com/gag/aBg0ZVD">
                  random things.
                </a>{' '}
                <br />
                <br /> Most of the time when I'm sitting at my computer I also listen to a lot of different{' '}
                <a href="https://open.spotify.com/user/mizztersc" target="_blank">
                  music
                </a>{' '}
                or try to draw or paint something. I'm also planing to create a section on this website for
                this, but for now it's mostly about coding and working as a software developer. If you want to
                connect with me, feel free to contact me on any of the social media links on this site or
                write me an <a href="mailto:lorenz.weis@gmail.com?subject=Contact&body=Hi Lorenz">email</a>.
              </span>
            </SC.TextBlock>
          </SC.TextSection>
          
        </SC.InfoStarter>
      </SC.Wrapper>
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
