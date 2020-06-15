import React from 'react';
import NewsletterForm from './NewsletterForm'
import {NewsletterBox, Header, Subline, Welcome, Wrapper} from './newsletter.styles';

const NewsletterHeader = () => {
  return (
    <Header>
      <Welcome>Get Content, helpful articles and links.</Welcome>
      <Subline>Usually I sent out 1-2 mails per months. No spam or ads I promise 🤞</Subline>
    </Header>    
  )
}

const Newsletter = () => {
  return (
    <Wrapper>
      <NewsletterBox>
        <NewsletterHeader />
        <NewsletterForm />
      </NewsletterBox>
    </Wrapper>
  )
};

export default Newsletter;