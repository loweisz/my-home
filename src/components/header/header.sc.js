import styled from 'styled-components';

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const InfoHeader = styled.div`
  background-color: ${({ theme }) => theme.black};
  letter-spacing: 2px;
  z-index: 1;
  color: ${({ theme }) => theme.white};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  padding: 20px;
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
    color: ${({ theme }) => theme.white};
    font-size: 35px;
    margin: 10px;

    &:hover {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin: 0;
  @media screen and (max-width: 1280px) {
    font-size: 30px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 20px;
  }
`;

export const HeaderSection = styled.div`
  width: 33%;
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  a {
    color: ${({ theme }) => theme.white};
    text-decoration: none;
  }
`;

export const AvatarImage = styled.div`
  background-color: white;
  border-radius: 60%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  border: 2px solid white;
  > img {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  margin-top: -35px;
  height: 40px;
  width: 40px;
  left: 50%;
  @media screen and (max-width: 800px) {
    left: auto;
    margin-top: 20px;
    flex-grow: 0;
    width: 135px;
  }
`;
