import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CubeContainer, Greetings, JumpItem } from './cubeMenu.styles';
import { socialIcons } from '../../pages/start';
import { AvatarImage } from '../header/header.sc';
import CubeElement from './CubeElement';
// import RandomCube from './RandomCube';

function CubeMenu(props) {
  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mouseleave', left);
    setTimeout(() => {
      document.addEventListener('mousemove', trackMousePosition);
    }, 2000);
    return () => {
      document.removeEventListener('mousemove', trackMousePosition);
    };
  }, []);

  useEffect(
    () => {
      if (props.isSelected) {
        document.removeEventListener('mousemove', trackMousePosition);
      }
    },
    [props.isSelected],
  );

  const [rotateX, setRotateX] = useState('0');
  const [rotateY, setRotateY] = useState('0');

  const left = () => {
    setRotateX('0');
    setRotateY('0');
  };

  const trackMousePosition = (e) => {
    if (wrapperRef.current) {
      // get the wrapper of the cube NOT the cube
      const scene = wrapperRef.current.getBoundingClientRect();
      // find the X and Y Position of the center of the cube
      const cubeDistXLeft = scene.left + scene.width / 2;
      const cubeDistYTop = scene.top + scene.height / 2;
      // find the distance from the right and the bottom to the center of the cube
      const cubeDistXRight = window.innerWidth - cubeDistXLeft;
      const cubeDistYBottom = window.innerHeight - cubeDistYTop;
      // get the position of the mouse relative to the cube
      const relMousePosY = e.clientY - cubeDistYTop;
      const relMousePosX = e.clientX - cubeDistXLeft;
      // calculate the percentage of the distance of the the mouse between cube
      // and the end of the window
      let percY = relMousePosY / (cubeDistYBottom - 75);
      let percX = relMousePosX / (cubeDistXRight - 150);
      if (relMousePosY / cubeDistYBottom < 0) {
        percY = relMousePosY / (cubeDistYTop - 75);
      }
      if (relMousePosX / cubeDistXRight < 0) {
        percX = relMousePosX / (cubeDistXLeft - 150);
      }
      const rotatingY = percY * 90;
      const rotatingX = percX * 90;
      setRotateY(`${rotatingY}deg`);
      setRotateX(`${rotatingX}deg`);
    }
  };

  const [hideText, setHideText] = useState(false);

  useEffect(
    () => {
      if (props.isSelected) {
        setTimeout(() => {
          setHideText(true);
        }, 1000);
      }
    },
    [props.isSelected],
  );

  const faces = useMemo(
    () => ({
      right: (
        <div>
          All my ideas and thoughts about tech, coding and everything I have in mind <br />
          <br /> If you are interested you can find them here.
        </div>
      ),
      left: (
        <div>
          All the projects and projects I have worked on or, incidentally, have implemented as a side project.
        </div>
      ),
      bottom: (
        <div>
          {props.hovered
            ? socialIcons.map((icon) => icon === props.hovered && <JumpItem key={icon}>{icon}</JumpItem>)
            : 'Social'}
        </div>
      ),
      front: !hideText && (
        <Greetings>
          <AvatarImage
            style={{
              height: '130px',
              width: '130px',
            }}
            src="https://picsum.photos/200"
          />
          <span>
            Hi there 👋
            <br /> <span>I'm Lorenz.</span>
            <br />I write code and think about stuff
          </span>
        </Greetings>
      ),
      top: <div>Currently I'm working at Loopline Systems</div>,
    }),
    [props.hovered, hideText],
  );

  return (
    <CubeContainer>
      <CubeElement
        wrapperRef={wrapperRef}
        rotateX={rotateX}
        rotateY={rotateY}
        hideText={hideText}
        isSelected={props.isSelected}
        faces={faces}
      />
    </CubeContainer>
  );
}

export default CubeMenu;
