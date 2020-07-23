import React, { useState } from 'react';
import { NewsLetterForm, FormInput, SubmitButton, InputFields, Welcome } from './newsletter.styles';

const NewsletterForm = () => {
  const [status, setStatus] = useState(null);
  const FORM_ID = '1434820';
  const FORM_URL = `https://app.convertkit.com/forms/${FORM_ID}/subscriptions`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: formData,
        headers: {
          accept: 'application/json',
        },
      });
      const json = await response.json();
      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
      setStatus('ERROR');
    } catch (err) {
      setStatus('ERROR');
    }
  };

  return (
    <NewsLetterForm
      onSubmit={handleSubmit}
      action={FORM_URL}
      method="post"
    >
      {status === 'SUCCESS' ? (
        <div>
          <Welcome>Wow thank you! <span role="img" aria-label="rocket">🚀</span></Welcome>
          <span>Check your inbox to confirm your subscription!</span>
        </div>
      ) : (
        <InputFields>
          <FormInput
            type="text"
            aria-label="How should I call you?"
            name="fields[first_name]"
            placeholder="How should I call you?"
            required
          />
          <FormInput
            type="email"
            aria-label="Your email"
            name="email_address"
            placeholder="Your email"
            required
          />
        </InputFields>
      )}
      {status !== 'SUCCESS' && <SubmitButton type="submit">Subscribe!</SubmitButton>}
      {status === 'ERROR' && <p>Something went wrong, please try again.</p>}
    </NewsLetterForm>
  );
};



export default NewsletterForm;
