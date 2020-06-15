import React from 'react';
import { Wrapper, InfoStarter, TextBlock, HeaderText, TextSection } from '../styles/pages.sc';
import Layout from '../components/layout';
import SEO from '../components/seo.helper';
import Newsletter from '../components/newsletter/Newsletter';

const NewsletterPage = () => (
  <Layout>
    <SEO title="Newsletter" description="Subscribe to my newsletter" />
    <Wrapper>
      <InfoStarter>
        <TextSection>
          <Newsletter />
        </TextSection>
      </InfoStarter>
    </Wrapper>
  </Layout>
);

export default NewsletterPage;
