import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  perspective: 1000px;
`;

export const Cube = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  transform-style: preserve-3d;
`

export const CubeFace = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  font-size: 40px;
  font-weight: bold;
  color: white;
  text-align: center;
  border: white 5px solid;
`

export const FaceFront = styled(CubeFace)`
  background-color: rgba(55,3,0, 1);
  color: white;
  transform: rotateY(  0deg) translateZ(250px);
`
export const FaceBack = styled(CubeFace)`
  background: black;
  color: white;
  transform: rotateY(180deg) translateZ(250px);
`
export const FaceRight = styled(CubeFace)`
  background-color: rgba(55,3,0, 1);
  color: white;
  transform: rotateY( 90deg) translateZ(250px);
`
export const FaceLeft = styled(CubeFace)`
  background: #a4a4a4;
  color: black;
  transform: rotateY(-90deg) translateZ(250px);
`
export const FaceTop = styled(CubeFace)`
  background: black;
  color: white;
  transform: rotateX( 90deg) translateZ(250px);
`
export const FaceBottom = styled(CubeFace)`
  background: #a4a4a4;
  color: black;
  transform: rotateX(-90deg) translateZ(250px);
`
