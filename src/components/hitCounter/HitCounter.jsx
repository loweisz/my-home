import React from 'react';
import styled from 'styled-components'

const InfoBox = styled.div`
  color: ${({ theme }) => theme.black};
  background: ${({ theme }) => theme.lightRed};
  padding: 1rem;
  font-size: 1.2rem;
  text-align: center;
`;

function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined);


  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      setHits(9999);
      return
    }
    // Invoke the function by making a request.
    // Update the URL to match the format of your platform.
    fetch(`/.netlify/functions/register-hit?slug=${slug}`)
      .then((res) => res.json())
      .then((json) => {
        if (typeof json.hits === 'number') {
          setHits(json.hits);
        }
      });
  }, [slug]);
  if (typeof hits === 'undefined') {
    return null;
  }
  return <InfoBox>You are the {hits} person reading this article 😍</InfoBox>;
}

export default HitCounter;
