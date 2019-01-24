import React from 'react'
import Layout from '../components/layout'

import * as SC from '../styles/pages.sc'
import AnimationSection from '../components/animation_section/AnimationSection'
import Header from '../components/header/Header';
import Tabs from '../components/tabs/Tabs';

const IndexPage = () => { 
  return (
    <Layout>
      <SC.Wrapper>
        <AnimationSection />
        <SC.InfoStarter>
          <Header />
          <Tabs />
          <SC.TextSection>
            <SC.TextBlock>
              <SC.HeaderText>Hi, my name is lorenz</SC.HeaderText>
              <span>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque penatibus et magnis dis parturient montes, 
                nascetur ridiculus mus. Donec quam felis,
                ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequ
                at massa quis enim. Donec pede justo, fringilla
                vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
                imperdiet a, venenatis vitae, justo. Nullam
                dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. 
                Vivamus elementum semper nisi. 
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                consequat vitae, eleifend ac, enim.
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
                Phasellus viverra nulla ut metus varius laoreet.
                Quisque rutrum. Aenean imperdiet. Etiam u
              </span>
            </SC.TextBlock>
         </SC.TextSection>
        </SC.InfoStarter>        
      </SC.Wrapper>
    </Layout>
  ) 
}

export default IndexPage
