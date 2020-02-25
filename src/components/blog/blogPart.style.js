import styled from 'styled-components';

export const AdditionalInfo = styled.div`
  display: flex;
  margin-top: 10px;
  > div {
    margin-right: 30px;
  }
`

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: rgba(112,7,0, 0.7);
  span {
    margin-top: 6px;
    margin-left: 10px;
  }
`
export const Abstract = styled.div`
  margin-top: 12px;
  font-size: 20px;
  line-height: 24px;
`

export const BlogPartContainer = styled.article`
  padding: 25px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  line-height: 1.5;
  
  a {
    text-decoration: none;
    color: white;
  }
  
  &:hover {
    transition: all 300ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px;  
  }
`

export const BlogBox = styled.div`
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconSection = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.red};
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.span`
  font-size: 30px;
  line-height: 1.2;
`