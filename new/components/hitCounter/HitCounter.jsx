import React from 'react';
import styled from 'styled-components'

const InfoBox = styled.div`
  color: ${({ theme }) => theme.black};
  
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 6px;
  font-size: 1.2rem;
  text-align: center;
`;

const Num = styled.span`
  font-weight: 900;
  color: ${({ theme }) => theme.darkRed};
`

const nth = d => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined);


  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      setHits(9992);
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
  return <InfoBox>You are the <Num>{hits}{nth(hits)}</Num> person reading this article 😍</InfoBox>;
}

export default HitCounter;
