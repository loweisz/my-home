import React, { useEffect, useState, useCallback } from 'react';
import Layout from '../components/layout';

import { Wrapper, InfoStarter, PageHeader, TextSection } from '../styles/pages.sc';
import { graphql } from 'gatsby';
import Experience from '../components/dev/Experience';
import SEO from "../components/seo.helper"

const DevPage = (props) => {
  const [obs, setObs] = useState(null);

  const createInterSectionObserver = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    return new IntersectionObserver((entries, observer) => {
      entries.forEach((change) => {
        if (change.intersectionRatio > 0) {
          animateElement(change.target);
          observer.unobserve(change.target);
        }
      });
    }, options);
  }, []);

  useEffect(
    () => {
      let observer = 'not_available';
      if ('IntersectionObserver' in window) {
        observer = createInterSectionObserver();
      }
      setObs(observer);
    },
    [createInterSectionObserver],
  );

  const animateElement = (target) => {
    target.classList.add('shown');
  };

  return (
    <Layout>
      <SEO
        title="Career"
        description="My path of being a software engine"
      />
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
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["exp", "edu"] } } }
      sort: { fields: frontmatter___index, order: ASC }
    ) {
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
            index
          }
          html
        }
      }
    }
  }
`;
