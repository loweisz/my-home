import React from 'react';
import { useTheme } from 'styled-components'
import RetroHitCounter from 'react-retro-hit-counter';

function HitCounter({ slug }) {
  const [hits, setHits] = React.useState(undefined);
  const red = useTheme()
  console.log(red)

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
  return <RetroHitCounter segmentActiveColor="red"  minLength={6} withBorder={false} size={26} hits={hits} />;
}

export default HitCounter;
