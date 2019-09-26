import styled, { keyframes } from 'styled-components';
import React from 'react';

const jumpIn = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
  
`;
const twist = keyframes`
  to {
    transform: rotate(360deg);
  }
`;
const twistReverse = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

export const Bubble = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  cursor: pointer;
  animation: ${({ selected }) => (selected ? twist : twistReverse)} 500ms ease-in-out;
  animation-direction: ${({ selected }) => (selected ? 'initial' : 'reverse')};
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 13px;
  bottom: 13px;
  animation: ${jumpIn} 500ms ease-in-out;
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ selected }) => (selected ? '17px' : '20px')} 15px;
  justify-content: center;
  align-items: center;
`;

export const Bar = styled.div`
  height: 8px;
  width: 100%;
  background-color: black;
  margin-top: ${({ selected }) => (selected ? '17px' : '6px')};
  border-radius: 20px;
  transition: all 0.3s ease;
  &:first-child {
    margin-top: 0;
  }
`;

export const BreadOne = styled(Bar)`
  transform: ${({ selected }) => (selected ? `translateY(20px) rotate(45deg)` : 'none')};
`;
export const BreadTwo = styled(Bar)`
  transform: ${({ selected }) => (selected ? `translateY(-30px) rotate(-45deg);` : 'none')};
`;
export const Patty = styled(Bar)`
  opacity: ${({ selected }) => (selected ? '0' : '1')};
`;

const growBox = keyframes`
  from {
    transform: scale(0);
    transform-origin: bottom right;
  }
  to {
    transform: scale(1);
  }
`;

export const SubMenu = styled.div`
  animation: ${growBox} 350ms ease;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  top: 0;
  border-radius: 5px;
  padding: 20px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  a {
    margin-top: 17px;
    color: black;
    text-decoration: none;
    &:first-child {
      margin-top: 0;
    }
  }
`;
