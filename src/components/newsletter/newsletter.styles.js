import styled from 'styled-components';

export const NewsletterBox = styled.div`
  background: ${({ theme }) => theme.black};
  width: 100%;
  max-width: 700px;
  overflow: hidden;
  margin: 12px;
  display: grid;
  border: 5px solid ${({ theme }) => theme.white};
  box-shadow: 6px 6px 0 0 ${({ theme }) => theme.white};
  border-radius: 50px;
  line-height: 1.5;
`;

export const AvatarImage = styled.div`
  right: 0;
  overflow: hidden;
  margin-top: 30px;
  height: 230px;
  width: 230px;
  @media screen and (max-width: 800px) {
    position: static;
    margin-bottom: 30px;
    display: none;
  }

  > img {
    width: 100%;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Header = styled.div`
  padding: 25px;
  background: ${({ theme }) => theme.red};
  color: ${({ theme }) => theme.black};
`
export const Subline = styled.span`
`
export const Welcome = styled.h2`
  margin: 0;
`

export const NewsLetterForm = styled.form`
  padding: 25px;
  display: flex;
  color: ${({ theme }) => theme.white};
  flex-direction:column;
  
`

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.white};
  margin-left: 6px;
  margin-right: 6px;
  flex: 1;
  &[type=email] {
    flex: 2;
  }

  @media screen and (max-width: 800px) {
    margin-left: 0;
    margin-right: 0;
    &:not(:first-child) {
      margin-top: 12px;
    }
  }

  &:focus, &:hover {
    outline: none;
    border: 2px solid ${({ theme }) => theme.lightRed};
  }
  
`;

export const InputFields = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background: ${({ theme }) => theme.red};
  border: none;
  margin-top: 12px;
  color: ${({ theme }) => theme.black};
  border-radius: 50px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.8;
  }
`
