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
  margin-top: 30px;
  padding: 10px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  a {
    color: ${({ theme }) => theme.black};
    text-decoration: none;
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
  color: ${({ theme }) => theme.red};
`