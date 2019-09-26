import styled from 'styled-components';

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const InfoHeader = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 10px 0 40px 0;
  }
`;

export const SocialSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 20px 40px;
`;

export const LinkContainer = styled.div`
  a {
    color: black;
    font-size: 35px;
    margin: 10px;

    &:hover {
      color: rgba(55, 3, 0, 1);
    }
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 0;
`;

export const HeaderSection = styled.div`
  width: 33%;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const AvatarImage = styled.img`
  background-color: red;
  border-radius: 60%;
  height: 130px;
  width: 130px;
  border: 2px solid white;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  left: 50%;
  @media screen and (max-width: 800px) {
    width: 100%;
    left: auto;
  }
`;
