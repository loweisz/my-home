import styled from 'styled-components';

export const Mobile = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

export const Desktop = styled.div`
  display: block;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const InfoHeader = styled.div`
  background-color: #252525;
  z-index: 1;
  color: ${({ theme }) => theme.black};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  @media screen and (max-width: 800px) {
    padding: 10px;
    height: 70px !important;
    box-sizing: border-box;
  }
`;

export const SocialSection = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin: 20px 40px;
`;

export const LinkContainer = styled.div`
  display: flex;
  a {
    color: #eee;
    font-size: 35px;
    margin: 10px;

    &:hover {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export const HeaderSection = styled.div`
  width: 33%;
  @media screen and (max-width: 800px) {
    width: 100%;
    width: auto;
    display: ${({ onlyDesktop }) => (onlyDesktop ? 'none' : 'flex')};
    justify-content: center;
  }
  a {
    color: #eee;
    text-decoration: none;
  }
`;

export const AvatarImage = styled.div`
  background-color: white;
  border-radius: 60%;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.white};
  height: 130px;
  width: 130px;
  @media screen and (max-width: 800px) {
    height: 80px !important;
    width: 80px !important;
    margin-top: -10px !important;
  }

  > img {
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  flex-grow: 1;
  position: relative;
  margin-top: -35px;
  height: 40px;
  left: 50%;
  @media screen and (max-width: 800px) {
    left: auto;
    flex-grow: 0;
    margin-top: 5px;
  }
`;
