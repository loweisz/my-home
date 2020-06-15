import styled, { keyframes, css } from 'styled-components';
import { SELECT_ANIMATION_TIME } from '../../pages/index'

const introSpin = keyframes`
  from {
    transform: translateZ(-250px) rotateX(-270deg) rotateY(90deg);
  }
  to {
    transform: translateZ(-250px) rotateX(0) rotateY(0);
  }
`;

const selectSpin = keyframes`
  0% {
    transform: scale(0.4);
  }
  40% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(4);
  }
`;

const spin = keyframes`
  0% {
    transform: rotateX(0);
  }
  70% {
    transform: rotateX(540deg);
  }
  100% {
    transform: rotateX(540deg);
  }
`

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  perspective: 1000px;
  transform: scale(0.5);
  transition: ${({ automated }) => (automated ? 'all 2000ms ease' : 'none')};
  animation: ${({ isSelected }) => isSelected ? css`${selectSpin} ${SELECT_ANIMATION_TIME}ms ease-in-out forwards` : '0'};
  z-index: 2;
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (min-width: 1080px) {
    transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.4 : 0.4)});
  }
  @media screen and (min-width: 1280px) {
    transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.5 : 0.5)});
  }
  @media screen and (min-width: 1540px) {
    transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.7 : 0.7)});
  }
`;

export const Cube = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  transition: ${({ isSelected }) => (isSelected ? 'all 300ms linear' : 'none')};
  width: 495px;
  height: 495px;
  position: relative;
  transform-style: preserve-3d;
  animation: ${1500}ms;
  animation-timing-function: ${({ isSelected }) =>
    isSelected ? 'linear' : 'cubic-bezier(0, 0.94, 0.5, 1)'};
  animation-name: ${({ isSelected, automated }) =>
    automated ? 'none' : isSelected ? spin : 'none'};
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 495px;
  height: 495px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: start;
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.background};
  border: ${({ theme }) => theme.background} 5px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    padding: 40px;
  }
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 70px;
  span {
    span {
      font-size: 60px;
      color: ${({ theme }) => theme.lightRed};
    }
  }
`;

export const FaceFront = styled(CubeFace)`
  transform: rotateY(0deg) translateZ(250px);
  > div {
    padding: 20px;
  }
`;
export const FaceBack = styled(CubeFace)`
  transform: rotateY(180deg) translateZ(250px);
`;
export const FaceRight = styled(CubeFace)`
  transform: rotateY(90deg) translateZ(250px);
`;

export const FaceLeft = styled(CubeFace)`
  transform: rotateY(-90deg) translateZ(250px);
`;

export const FaceTop = styled(CubeFace)`
  transform: rotateX(90deg) translateZ(250px);
`;
export const FaceBottom = styled(CubeFace)`
  transform: rotateX(-90deg) translateZ(250px);
  font-size: 120px;
`;

const jump = keyframes`
  from {
    opacity: 0;
    transform: scale(0)
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
`;

export const JumpItem = styled.div`
  animation: ${jump} 200ms ease;
`;
