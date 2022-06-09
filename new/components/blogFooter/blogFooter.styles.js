import styled from 'styled-components';

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.darkRed};
`;

export const SubTitle = styled.h3``;
export const Wrapper = styled.div`
  color: ${({ theme }) => theme.black};
  border-top: 1px solid ${({ theme }) => theme.grey};
  margin-top: 24px;
  padding-top: 24px;
`;

export const TwitterIcon = styled.div`
  height: 80px;
  width: 80px;
  color: ${({ theme }) => theme.black};
  font-size: 52px;
  transition: all 400ms ease;
  &:hover {
    font-size: 65px;
    margin-bottom: 0;
    transform: rotate(400deg);
  }
`;
