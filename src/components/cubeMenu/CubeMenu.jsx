import React, { useEffect, useRef, useState } from 'react';
import {
  Cube,
  FaceBack,
  FaceBottom,
  FaceFront,
  FaceLeft,
  FaceRight,
  FaceTop,
  JumpItem,
  Wrapper,
} from './cubeMenu.styles';
import { socialIcons } from '../../pages/start';

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

  return (
    <Wrapper ref={wrapperRef}>
      <Cube
        isSelected={props.isSelected}
        style={{
          transform: !props.isSelected && `translateZ(-250px) rotateY(${rotateX}) rotateX(${rotateY})`,
          transition: rotateY === '0' && rotateX === '0' ? 'all 1s ease' : 'inherit',
        }}
      >
        <FaceFront>
          <div>
            {!hideText && (
              <span>Welcome to my Page! My Name is Lorenz. I'm a web developer located in Berlin</span>
            )}
          </div>
        </FaceFront>
        <FaceBack>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, labore et dolore magna aliquyam erat, sed
            diam voluptua.
          </div>
        </FaceBack>
        <FaceRight>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr labore et dolore magna aliquyam erat, sed
            diam voluptua. At vero eos et accusa
          </div>
        </FaceRight>
        <FaceLeft>
          <div>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
          </div>
        </FaceLeft>
        <FaceTop>
          <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy </div>
        </FaceTop>
        <FaceBottom>
          <div>
            {props.hovered
              ? socialIcons.map((icon) => icon === props.hovered && <JumpItem key={icon}>{icon}</JumpItem>)
              : 'Social'}
          </div>
        </FaceBottom>
      </Cube>
    </Wrapper>
  );
}

export default CubeMenu;
