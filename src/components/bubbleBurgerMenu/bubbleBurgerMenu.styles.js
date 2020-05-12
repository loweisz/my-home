import styled, { keyframes, css } from 'styled-components';

const jumpIn = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
  
`;
const twist = keyframes`
  to {
    transform: rotate(90deg);
  }
`;

const twistReverse = keyframes`
  to {
    transform: rotate(-90deg);
  }
`;

export const Bubble = styled.div`
  height: 80px;
  width: 80px;
  position: relative;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 30px ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.29)')};
  ${({ selected }) => selected && css`
    box-shadow: none;
  `}
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
  background-color: ${({ theme }) => theme.black};
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

export const SubMenu = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  top: 0;
  border-radius: 5px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 30px ${({ theme }) => (theme.isDark ? 'rgba(255, 255, 255, 0.09)' : 'rgba(0, 0, 0, 0.29)')};
  padding: 30px;
  padding-top: 30px;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  margin-bottom: -348px;
  margin-right: -228px;
  a {
    padding: 15px 30px;
    min-width: 200px;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.darkRed};

    &:first-child {
      margin-left: 90px;
      border: none;
    }
    &:nth-child(2) {
      margin-left: 46px;
    }

    > span {
      margin-left: 10px;
      color: ${({ theme }) => theme.black};
    }
  }
`;
