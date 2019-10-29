import React from 'react';
import Layout from '../components/layout';

import * as SC from '../styles/pages.sc';
import { graphql } from 'gatsby';
import Experience from '../components/dev/Experience';

const DevPage = (props) => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
          <SC.PageHeader>All the companies I worked for:</SC.PageHeader>
          {/*<SC.SubHeader>*/}
          {/*  the box, they are reserved for "client side" (components/pages) all my experiments with fragments*/}
          {/*  in gatsby-node.js resulted in build errors. A workaround is to write them yourself, if you're*/}
          {/*  willing take a look at the gatsby-tr*/}
          {/*</SC.SubHeader>*/}
          <SC.TextSection>
            <div>
              {props.data.allMarkdownRemark.edges.map((edge) => (
                <Experience node={edge.node} />
              ))}
            </div>
          </SC.TextSection>
        </SC.InfoStarter>
      </SC.Wrapper>
    </Layout>
  );
};

export default DevPage;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "exp" } } }) {
      edges {
        node {
          frontmatter {
            title
            startDate
            endDate
            company
            website
            location
          }
          html
        }
      }
    }
  }
`;
