import React, { useEffect, useMemo, useRef, useState } from 'react';
import CubeElement from './CubeElement';
import { Randomize } from './randomCube.styles';

export const cubesPerLine = 4;

const RandomCube = (props) => {
  // random scale between 0.3 and 0.7

  const [calcIndex, setCalcIndex] = useState(0);
  const calcInterval = useRef();

  useEffect(() => {
    calcInterval.current = setInterval(() => {
      setCalcIndex((c) => c + 1);
    }, Math.random() * 5000 + 2000);
    return () => {
      if (calcInterval.current) {
        clearInterval(calcInterval.current);
      }
    };
  }, []);

  const cubeScale = useMemo(() => Math.random() * 0.5 + 0.1, [calcIndex]);

  const pos = useMemo(
    () => ({
      x:
        (props.index % cubesPerLine) * (window.innerWidth / cubesPerLine) +
        (props.index > cubesPerLine ? Math.random() * 200 - 100 : 0),
      y:
        Math.floor(props.index / cubesPerLine) * (window.innerHeight / cubesPerLine) +
        (props.index > cubesPerLine ? Math.random() * 200 - 100 : 0),
    }),
    [calcIndex],
  );

  // random speed between 100ms and 200ms
  const speed = useMemo(() => Math.random() * 100 + 100, []);

  const interval = useRef(null);

  const [rotateX, setRotateX] = useState(Math.random() * 360);
  const [rotateY, setRotateY] = useState(Math.random() * 360);

  const kickoff = () => {
    interval.current = setInterval(() => {
      setRotateX((x) => x + 1);
      setRotateY((y) => y + 1);
    }, speed);
  };

  const stop = () => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  };

  useEffect(() => {
    kickoff();
    return () => {
      stop();
    };
  }, []);

  return (
    <Randomize style={{ bottom: pos.y, right: pos.x, transform: `scale(${cubeScale * 0.6})` }}>
      <CubeElement automated rotateX={`${Math.round(rotateX)}deg`} rotateY={`${Math.round(rotateY)}deg`} />
    </Randomize>
  );
};

export default React.memo(RandomCube);
