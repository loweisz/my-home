import { useEffect, useRef, useState } from 'react';

function useDelayedAnimation(delay) {
  const [showAnimation, setShowAnimation] = useState(false);
  const delayTimeout = useRef(null);

  useEffect(() => {
    delayTimeout.current = window.setTimeout(() => {
      setShowAnimation(true);
    }, delay);
    return () => {
      if (delayTimeout.current) {
        window.clearTimeout(delayTimeout.current);
      }
    };
  }, []);

  return showAnimation;
}

export default useDelayedAnimation;
