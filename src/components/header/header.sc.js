import styled from 'styled-components';

export const InfoHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

export const SocialSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin:  20px 40px;
`;

export const LinkImg = styled.img`
  height: 30px;
  width: 30px;
  margin: 10px;
  padding: 5px;
  &:hover {
    background-color: #E6E6E6;
  }
`;

export const LinkContainer = styled.div`

`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

export const HeaderSection = styled.div`
  width: 33%;
`;

export const AvatarImage = styled.img`
  background-color: red;
  border-radius: 60%;
  height: 130px;
  width: 130px;
  border: 2px solid white;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  left: 50%;
`;
