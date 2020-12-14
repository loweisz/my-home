import React from 'react';
import RetroHitCounter from 'react-retro-hit-counter';

function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined);
  React.useEffect(() => {
    // Don't count hits on localhost
    if (process.env.NODE_ENV !== 'production') {
      setHits(9999);
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
  return <RetroHitCounter size={30} hits={hits} />;
}

export default HitCounter;
