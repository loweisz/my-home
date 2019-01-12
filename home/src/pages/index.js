import React from 'react'
import { Link } from 'gatsby'
import styled, { keyframes } from 'styled-components'
import Layout from '../components/layout'
import { Redirect } from '@reach/router';

const LeftHero = styled.div`
  width: 67%;
  background-color: #03346C;
`

const IndexPage = () => (
  <Layout>
    <Redirect to="/landing"/>
  </Layout>
)

export default IndexPage
