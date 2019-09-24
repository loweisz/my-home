import React, { useEffect, useRef, useState } from 'react';
import {
  Cube,
  FaceBack,
  FaceBottom,
  FaceFront,
  FaceLeft,
  FaceRight,
  FaceTop,
  Wrapper,
} from './cubeMenu.styles';

function CubeMenu() {
  const wrapperRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      document.onmousemove = trackMousePosition;
    }, 3200);
  });

  const [rotateX, setRotateX] = useState('0');
  const [rotateY, setRotateY] = useState('0');

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

  return (
    <Wrapper ref={wrapperRef}>
      <Cube style={{ transform: `translateZ(-250px) rotateY(${rotateX}) rotateX(${rotateY})` }}>
        <FaceFront>Welcome to my Page! My Name is Lorenz. I'm a web developer located in Berlin </FaceFront>
        <FaceBack>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa
        </FaceBack>
        <FaceRight>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa
        </FaceRight>
        <FaceLeft>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa
        </FaceLeft>
        <FaceTop>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </FaceTop>
        <FaceBottom>Lorem ipsum dolor diam voluptua. At vero eos et accusa</FaceBottom>
      </Cube>
    </Wrapper>
  );
}

export default CubeMenu;
