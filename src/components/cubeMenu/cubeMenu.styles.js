import styled, { keyframes } from 'styled-components';

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
    transform: translateZ(-250px) rotateY(0) rotateX(0);
  }
  40% {
    transform: translateZ(-1350px) rotateX(340deg) rotateY(12deg);
  }
  80% {
    transform: translateZ(600px) rotateX(720deg) rotateY(-6deg);
  }
  100% {
    transform: translateZ(600px) rotateX(720deg) rotateY(-6deg);
  }
`;

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  perspective: 1000px;
  transform: scale(0.5);
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (min-width: 1080px) {
    transform: scale(0.6);
  }
  @media screen and (min-width: 1280px) {
    transform: scale(0.8);
  }
  @media screen and (min-width: 1500px) {
    transform: scale(1);
  }
`;

export const Cube = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  transition: ${({ isSelected }) => (isSelected ? 'all 300ms ease' : 'none')};
  width: 500px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
  animation: 1800ms;
  animation-timing-function: ${({ isSelected }) =>
    isSelected ? 'ease-in' : 'cubic-bezier(0, 0.94, 0.5, 1)'};
  animation-name: ${({ isSelected }) => (isSelected ? selectSpin : introSpin)};
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: start;
  border: white 5px solid;
  div {
    padding: 20px;
  }
`;

export const Greetings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin: 20px;
  }
`;

export const FaceFront = styled(CubeFace)`
  background-color: ${({ darkColor }) => (darkColor ? '#370300' : '#740300')};
  color: white;
  transform: rotateY(0deg) translateZ(250px);
`;
export const FaceBack = styled(CubeFace)`
  background: black;
  color: white;
  transform: rotateY(180deg) translateZ(250px);
`;
export const FaceRight = styled(CubeFace)`
  background-color: #740300;
  color: white;
  transform: rotateY(90deg) translateZ(250px);
`;
export const FaceLeft = styled(CubeFace)`
  background: #a4a4a4;
  color: black;
  transform: rotateY(-90deg) translateZ(250px);
`;
export const FaceTop = styled(CubeFace)`
  background: black;
  color: white;
  transform: rotateX(90deg) translateZ(250px);
`;
export const FaceBottom = styled(CubeFace)`
  background: #a4a4a4;
  color: black;
  transform: rotateX(-90deg) translateZ(250px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
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
