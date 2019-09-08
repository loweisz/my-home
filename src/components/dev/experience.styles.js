import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    margin-top: 50px;
  }
  to {
    opacity: 1;
    margin-top: 15px;
  }
`

export const ExperienceBox = styled.div`
  animation: ${fadeIn} 300ms ease-in-out;
  margin-top: 15px;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  text-align: start;
  display: flex;
  flex-direction: column;
`;

export const Company = styled.a`
  color: #370300;
  font-size: 20px;
  text-decoration: none;
`;
export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;
export const Time = styled.span`
  font-size: 15px;
`;
export const SubInfo = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

export const DataText = styled.p``
