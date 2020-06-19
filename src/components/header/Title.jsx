import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const text = '<Lorenz Weiß />';
const textArr = text.split('');
const frames = textArr.reduce(
  (acc, _, index) => `
    ${acc}
    ${Math.floor((index / textArr.length) * 100)}% {
      content: "${textArr.slice(0, index + 1).join('')}";
    }
  `,
  '',
);

const typing = keyframes`
  ${frames}
`;

const blink = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  margin: 0;
  position: absolute;
  width: 100%;
  height: 50%;
  &:before {
  content: '${text}';
    font-size: 30px;
    width: 100%;
    height: 100%;
    line-height: 48px;
    left: 30%;
    top: 50%;
    animation: ${typing} 3.5s linear 1;
    animation-fill-mode: both;
    @media screen and (max-width: 800px) {
      font-size: 24px;
    }
  }
  &:after {
    position: absolute;
    display: ${({ isHidden }) => isHidden ? 'none': 'inline-block'};
    bottom: 0;
    top: 11px;
    margin-left: 2px;
    content: '';
    height: 100%;
    width: 14px;
    background-color: white;
    animation: ${blink} 900ms infinite;
    animation-timing-function: forwards;
  }
  &:hover {
    opacity: 0.8;
  }
  
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
  @media screen and (max-width: 800px) {
    width: 270px;
  }
`;

const TitleText = () => {
  const [isHidden, setIsHidden] = useState(false);

  const timer = useRef();

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setIsHidden(false)
    timer.current = setTimeout(() => {
      setIsHidden(true)
    }, 4500)
  }, [])

  return (
    <Container>
      <Title isHidden={isHidden}></Title>
    </Container>
  );
};
export default TitleText;
