import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'

const smoothIn = keyframes`
  0% {
    opacitiy: 0;
    margin-top: 50px;    
  }
  100% {
    opacitiy: 1;
    margin-top: 0;    
  }
`

const NameTag = styled.div`
  font-family: 'Shadows Into Light', cursive;
  width: 100%;
  font-size: 100px;
 `;

 const ContentWrapper = styled.div`
  animation: ${smoothIn} 5s ease-out;
 `;

const IndexPage = () => (
  <Layout>
    <ContentWrapper>
      <NameTag>Lorenz Weiß</NameTag>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </ContentWrapper>
  </Layout>
)

export default IndexPage
