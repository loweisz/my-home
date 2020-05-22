import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Wrapper, InfoStarter, PageHeader, TextBlock, HeaderText } from '../styles/pages.sc';

const ImageCard = styled.div`
  width: ${({ ratio }) => (ratio > 1 ? '500px' : '300px')};
  margin: 20px;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

function VisualsPage(props) {
  console.log(props.data.allFile.edges);
  return (
    <Layout>
      <Wrapper>
        <InfoStarter>
          <CardWrapper>
            {props.data.allFile.edges.map((edge) => (
              <ImageCard
                ratio={edge.node.childImageSharp.sizes.aspectRatio}
                key={edge.node.childImageSharp.sizes.src}
              >
                <Img title="Image Card" alt="Avatar Image" sizes={edge.node.childImageSharp.sizes} />
              </ImageCard>
            ))}
            {props.data.allFile.edges.map((edge) => (
              <ImageCard
                ratio={edge.node.childImageSharp.sizes.aspectRatio}
                key={edge.node.childImageSharp.sizes.src}
              >
                <Img title="Image Card" alt="Avatar Image" sizes={edge.node.childImageSharp.sizes} />
              </ImageCard>
            ))}
            {props.data.allFile.edges.map((edge) => (
              <ImageCard
                ratio={edge.node.childImageSharp.sizes.aspectRatio}
                key={edge.node.childImageSharp.sizes.src}
              >
                <Img title="Image Card" alt="Avatar Image" sizes={edge.node.childImageSharp.sizes} />
              </ImageCard>
            ))}
          </CardWrapper>
        </InfoStarter>
      </Wrapper>
    </Layout>
  );
}

export default VisualsPage;

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "visuals" } }) {
      edges {
        node {
          childImageSharp {
            sizes(maxWidth: 4000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
