import React from 'react';
import Layout from '../components/layout';

import { Wrapper, InfoStarter, PageHeader, TextSection, Blogs} from '../styles/pages.sc';
import { graphql } from 'gatsby';
import Experience from '../components/dev/Experience';

const DevPage = (props) => {
  return (
    <Layout>
      <Wrapper>
        <InfoStarter>
          <PageHeader>What I did so far:</PageHeader>
          <TextSection>
            {props.data.allMarkdownRemark.edges.map((edge) => (
              <Experience key={edge.node.frontmatter.company} node={edge.node} />
            ))}
          </TextSection>
        </InfoStarter>
      </Wrapper>
    </Layout>
  );
};

export default DevPage;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { in: ["exp", "edu"] } } }) {
      edges {
        node {
          frontmatter {
            title
            startDate
            endDate
            company
            website
            location
            techStack
          }
          html
        }
      }
    }
  }
`;
