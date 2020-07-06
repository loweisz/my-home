import styled, { keyframes } from 'styled-components';

const iconJump = ({ theme }) => keyframes`
  50% {
    margin-left: -30px;
    margin-right: 30px;
  }
  100% {
    color: ${theme.red};
  }
`;

const textJump = ({ theme }) => keyframes`
  from {
    margin-left: 40px;
    margin-right: -40px;
    color: ${theme.grey};
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: Mosk, sans-serif;
  font-weight: 900;
  justify-content: center;
  color: ${({ theme }) => theme.black};
  font-size: 68px;
  position: relative;
  @media screen and (max-width: 800px) {
    .icon {
      display: none;
    }
  }
  .icon {
    position: absolute;
    left: -60px;
  }
  z-index: 2;
  > svg {
    margin-right: 20px;
  }
  > a {
    text-decoration: underline;
  }
`;

export const Blob = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  > svg {
    height: 691px;
    position: absolute;
    width: 800px;
    transform: ${({ isSelected }) => (isSelected ? 'scale(10) !important' : 'scale(1)')};
    transition: all 1000ms ease-in-out;
  }
  @media screen and (max-width: 800px) {
    > svg {
      display: none;
    }
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }
    ${Text} {
      animation: ${textJump} 400ms ease-out;
      animation-delay: 200ms;

      .icon {
        animation: ${iconJump} 250ms ease-in;
        animation-fill-mode: forwards;
      }
    }
  }
`;

export const MenuText = styled.span`
  display: flex;
  justify-content: ${({ centered }) => centered ? 'center' : 'flex-start'};
  font-weight: 900;
  @media screen and (max-width: 800px) {
    text-decoration: underline;
    letter-spacing: 2px;
  }

  a {
    color: ${({ theme }) => theme.black};
    font-size: 70px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      color: ${({ theme }) => theme.darkRed};
    }
  }
`;

export const SocialIcon = styled.div`
  @media screen and (max-width: 800px) {
    > a {
      font-size: 40px;
    }
  }
  &:hover {
    transform: scale(1.25);
  }
  transition: all 200ms ease-in-out;
`;
