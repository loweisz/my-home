import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

import { Wrapper, InfoStarter, PageHeader, TextSection, Blogs } from '../styles/pages.sc';
import { graphql } from 'gatsby';
import Experience from '../components/dev/Experience';

const DevPage = (props) => {
  const [obs, setObs] = useState(null);
  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((change) => {
        if (change.intersectionRatio > 0) {
          animateElement(change.target);
          observer.unobserve(change.target);
        }
      });
    }, options);
    setObs(observer);
  }, []);

  const animateElement = (target) => {
    target.classList.add('shown');
  };

  return (
    <Layout>
      <Wrapper>
        <InfoStarter>
          <PageHeader>What I did so far:</PageHeader>
          <TextSection>
            {props.data.allMarkdownRemark.edges.map((edge) => (
              <Experience observer={obs} key={edge.node.frontmatter.company} node={edge.node} />
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
