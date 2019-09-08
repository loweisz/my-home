import React from 'react'
import Layout from '../components/layout'

import * as SC from '../styles/pages.sc'

const IndexPage = () => {
  return (
    <Layout>
      <SC.Wrapper>
        <SC.InfoStarter>
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
