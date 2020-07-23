import { useEffect, useRef, useState } from 'react';

function useDelayedAnimation(delay) {
  const [showAnimation, setShowAnimation] = useState(false);
  const delayTimeout = useRef(null);

  useEffect(() => {
    delayTimeout.current = setTimeout(() => {
      setShowAnimation(true);
    }, delay);
    return () => {
      if (delayTimeout.current) {
        clearTimeout(delayTimeout.current);
      }
    };
  }, [delay]);

  return showAnimation;
}

export default useDelayedAnimation;
