import React, { useEffect, useState, useCallback } from 'react';
import { RoughNotation } from 'react-rough-notation';
import Layout from '../components/layout';

import { Wrapper, InfoStarter, PageHeader, TextSection, HeaderText, TextBlock } from '../styles/pages.sc';
import { graphql } from 'gatsby';
import Experience from '../components/dev/Experience';
import SEO from '../components/seo.helper';
import Newsletter from '../components/newsletter/Newsletter';
import useDelayedAnimation from '../hooks/useDelayedAnimation';

const DevPage = (props) => {
  const [obs, setObs] = useState(null);
  const showAnimation = useDelayedAnimation(400);

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

  useEffect(() => {
    let observer = 'not_available';
    if ('IntersectionObserver' in window) {
      observer = createInterSectionObserver();
    }
    setObs(observer);
  }, [createInterSectionObserver]);

  const animateElement = (target) => {
    target.classList.add('shown');
  };

  return (
    <Layout>
      <SEO title="Career" description="This is the past and present of my journey as a Software engineer" />
      <Wrapper>
        <InfoStarter>

          <TextSection>
            <TextBlock>
              <HeaderText>The past and present of my journey as a Software engineer</HeaderText>
            </TextBlock>
            {props.data.allMarkdownRemark.edges.map((edge) => (
              <Experience observer={obs} key={edge.node.frontmatter.company} node={edge.node} />
            ))}
          </TextSection>
          <Newsletter />
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
