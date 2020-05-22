import React from 'react';
import { Wrapper, InfoStarter, TextBlock, HeaderText, TextSection } from '../styles/pages.sc';
import Layout from '../components/layout';
import SEO from '../components/seo.helper';

const ProjectsPage = (props) => (
  <Layout>
    <SEO title="Projects" description="My personal projects, I created or I have worked on" />
    <Wrapper>
      <InfoStarter>
        <TextSection>
          <TextBlock>
            <HeaderText>Here are some of my projects:</HeaderText>
          </TextBlock>
        </TextSection>
        <TextSection></TextSection>
      </InfoStarter>
    </Wrapper>
  </Layout>
);

export default ProjectsPage;

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
