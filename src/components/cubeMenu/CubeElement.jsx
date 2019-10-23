import React from 'react';
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

const CubeElement = (props) => {
  const { faces, rotateY, rotateX, hideText, isSelected, wrapperRef, scaleCube, automated } = props;
  return (
    <Wrapper automated={automated} scaleCube={scaleCube} ref={wrapperRef}>
      <Cube
        automated={automated}
        isSelected={isSelected}
        style={{
          transform: !isSelected && `translateZ(-250px) rotateY(${rotateX}) rotateX(${rotateY})`,
          transition: automated ? `none` : rotateY === '0' && rotateX === '0' ? 'all 1s ease' : 'inherit',
        }}
      >
        <FaceFront automated={automated} darkColor={hideText}>
          {faces && faces.front}
        </FaceFront>
        <FaceBack automated={automated}>
          <div />
        </FaceBack>
        <FaceRight automated={automated}>{faces && faces.right}</FaceRight>
        <FaceLeft automated={automated}>{faces && faces.left}</FaceLeft>
        <FaceTop automated={automated}>{faces && faces.top}</FaceTop>
        <FaceBottom automated={automated}>{faces && faces.bottom}</FaceBottom>
      </Cube>
    </Wrapper>
  );
};

export default CubeElement;
