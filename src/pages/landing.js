import React from 'react'
import Layout from '../components/layout'

import * as SC from '../styles/pages.sc'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Tabs from '../components/tabs/Tabs';

const IndexPage = () => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
          <Header />
          <Tabs />
          <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Hi, my name is lorenz</SC.HeaderText>
              <span>
                How are you?
              </span>
            </SC.TextBlock>
         </SC.TextSection>
         
        </SC.InfoStarter>
      </SC.Wrapper>
    </Layout>
  )
}

export default IndexPage
