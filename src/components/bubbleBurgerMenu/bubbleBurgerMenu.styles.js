import styled, { keyframes } from 'styled-components';

const jumpIn = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
  
`;
const twist = keyframes`
  to {
    transform: rotate(180deg);
  }
`;

const twistReverse = keyframes`
  to {
    transform: rotate(-180deg);
  }
`;

export const Bubble = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.29);
  cursor: pointer;
  animation: ${({ selected }) => (selected ? twist : twistReverse)} 500ms ease-in-out;
  animation-direction: ${({ selected }) => (selected ? 'initial' : 'reverse')};
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline: none;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 13px;
  bottom: 13px;
  animation: ${jumpIn} 500ms ease-in-out;
`;

export const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ selected }) => (selected ? '17px' : '20px')} 15px;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
`;

export const Bar = styled.div`
  height: 8px;
  flex-shrink: 0;
  width: 100%;
  background-color: black;
  margin-top: ${({ selected }) => (selected ? '17px' : '6px')};
  border-radius: 20px;
  transition: all 0.3s ease;
  &:first-child {
    margin-top: ${({ selected }) => (selected ? '10px' : '0')};
  }
`;

export const BreadOne = styled(Bar)`
  transform: ${({ selected }) => (selected ? `translateY(20px) rotate(45deg)` : 'none')};
`;
export const BreadTwo = styled(Bar)`
  transform: ${({ selected }) => (selected ? `translateY(-30px) rotate(-45deg);` : 'none')};
`;
export const Patty = styled(Bar)`
  opacity: ${({ selected }) => (selected ? '0' : '1')};
`;

const growBox = keyframes`
  from {
    transform: scale(0);
    transform-origin: bottom right;
  }
  to {
    transform: scale(1);
  }
`;

export const SubMenu = styled.div`
  animation: ${growBox} 350ms ease;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  top: 0;
  border-radius: 5px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  a {
    color: black;
    padding: 15px 30px;
    min-width: 200px;
    text-decoration: none;
    border-top: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.darkRed};

    &:first-child {
      margin-top: 0;
      border: none;
    }
    > span {
      margin-left: 10px;
      color: ${({ theme }) => theme.black};
    }
  }
`;
