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
  transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.5 : 0.5)});
  transition: ${({ automated }) => (automated ? 'all 2000ms ease' : 'none')};
  @media screen and (max-width: 800px) {
    display: none;
  }
  @media screen and (min-width: 1080px) {
    transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.6 : 0.6)});
  }
  @media screen and (min-width: 1280px) {
    transform: scale(${({ scaleCube }) => (scaleCube ? scaleCube * 0.8 : 0.8)});
  }
`;

export const Cube = styled.div`
  @media screen and (max-width: 800px) {
    display: none;
  }
  transition: ${({ isSelected }) => (isSelected ? 'all 300ms ease' : 'none')};
  width: 495px;
  height: 495px;
  position: relative;
  transform-style: preserve-3d;
  animation: 1900ms;
  animation-timing-function: ${({ isSelected }) =>
    isSelected ? 'ease-in' : 'cubic-bezier(0, 0.94, 0.5, 1)'};
  animation-name: ${({ isSelected, automated }) =>
    automated ? 'none' : isSelected ? selectSpin : introSpin};
`;

export const CubeFace = styled.div`
  position: absolute;
  width: 495px;
  height: 495px;
  font-size: 50px;
  font-weight: bold;
  color: white;
  text-align: start;
  border: ${({ automated }) => (automated ? '#740300 5px solid' : 'white 5px solid')};
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ automated }) =>
    automated ? 'radial-gradient(500px at 49.2% 48.3%, #fff 0%, #740300 90%) !important' : 'inherit'};
  box-shadow: ${({ automated }) => (automated ? '0 0 101px -5px rgba(255, 255, 255, 0.75)' : 'none')};
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
      letter-spacing: 1px;
      color: ${({ theme }) => theme.white};
    }
  }
`;

export const FaceFront = styled(CubeFace)`
  background: ${({ darkColor }) => (darkColor ? '#370300' : '#740300')};
  color: white;
  transform: rotateY(0deg) translateZ(250px);
  > div {
    padding: 20px;
  }
`;
export const FaceBack = styled(CubeFace)`
  background: black;
  color: white;
  transform: rotateY(180deg) translateZ(250px);
`;
export const FaceRight = styled(CubeFace)`
  background: radial-gradient(636px at 49.2% 48.3%, rgb(55, 3, 0) 0%, rgb(116, 3, 0) 90%);
  color: white;
  transform: rotateY(90deg) translateZ(250px);
`;

export const FaceLeft = styled(CubeFace)`
  background: radial-gradient(636px at 49.2% 48.3%, rgb(255, 255, 255) 0%, rgb(96, 96, 96) 90%);
  color: black;
  transform: rotateY(-90deg) translateZ(250px);
`;

export const FaceTop = styled(CubeFace)`
  background: radial-gradient(636px at 49.2% 48.3%, #555 0%, #000 90%);
  color: white;
  transform: rotateX(90deg) translateZ(250px);
`;
export const FaceBottom = styled(CubeFace)`
  background: radial-gradient(636px at 49.2% 48.3%, rgb(255, 255, 255) 0%, rgb(96, 96, 96) 90%);
  color: black;
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

export const CubeContainer = styled.div`
  z-index: 2;
`;
