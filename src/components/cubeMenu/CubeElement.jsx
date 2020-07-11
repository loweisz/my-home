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
  const {
    faces,
    rotateY,
    rotateX,
    hideText,
    isSelected,
    wrapperRef,
    scaleCube,
    automated,
    size = 'large',
  } = props;
  return (
    <Wrapper size={size} isSelected={isSelected} automated={automated} scaleCube={scaleCube} ref={wrapperRef}>
      <Cube
        size={size}
        automated={automated}
        isSelected={isSelected}
        style={{
          transform: !isSelected && `translateZ(-250px) rotateY(${rotateX}) rotateX(${rotateY})`,
          transition: automated ? `none` : rotateY === '0' && rotateX === '0' ? 'all 1s ease' : 'inherit',
        }}
      >
        <FaceFront size={size} automated={automated} darkColor={hideText}>
          {faces && faces.front}
        </FaceFront>
        <FaceBack size={size} automated={automated}>
          <div />
        </FaceBack>
        <FaceRight size={size} automated={automated}>
          {faces && faces.right}
        </FaceRight>
        <FaceLeft size={size} automated={automated}>
          {faces && faces.left}
        </FaceLeft>
        <FaceTop size={size} automated={automated}>
          {faces && faces.top}
        </FaceTop>
        <FaceBottom size={size} automated={automated}>
          {faces && faces.bottom}
        </FaceBottom>
      </Cube>
    </Wrapper>
  );
};

export default CubeElement;
