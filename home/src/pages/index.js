import React from 'react'
import Layout from '../components/layout'
import { Redirect } from '@reach/router';

const IndexPage = () => (
  <Layout>
    <Redirect to="/landing"/>
  </Layout>
)

export default IndexPage
