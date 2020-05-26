import React, { useEffect, useMemo, useRef, useState } from 'react';
import { socialIcons } from '../cubeNavigation/SocialElement';
import { Greetings, JumpItem } from './cubeMenu.styles';
import { AvatarImage } from '../header/header.sc';
import CubeElement from './CubeElement';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

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

  useEffect(() => {
    if (props.isSelected) {
      document.removeEventListener('mousemove', trackMousePosition);
    }
  }, [props.isSelected]);

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

  useEffect(() => {
    if (props.isSelected) {
      setTimeout(() => {
        setHideText(true);
      }, 1000);
    }
  }, [props.isSelected]);

  const data = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "data/avatar.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 472) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `,
  );
  const faces = useMemo(
    () => ({
      right: (
        <div>
          Feel free to meet me.
          <br />
        </div>
      ),
      left: <div>From time to time I write about some topics, that I'm interested in.</div>,
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
              marginBottom: '-115px',
            }}
          >
            <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
          </AvatarImage>
          <span>
            Hi there{' '}
            <span role="img" aria-label="wave-hand">
              👋
            </span>
            <br /> <span>I'm Lorenz.</span>
            <br />I write code and think about stuff
          </span>
        </Greetings>
      ),
      top: <div>Currently I'm working at Aroundhome</div>,
    }),
    [props.hovered, hideText, data.avatarImage.childImageSharp.sizes],
  );

  return (
    <CubeElement
      wrapperRef={wrapperRef}
      rotateX={rotateX}
      rotateY={rotateY}
      hideText={hideText}
      isSelected={props.isSelected}
      faces={faces}
    />
  );
}

export default CubeMenu;
