import styled from 'styled-components';
import { Box } from '../../styles/shared';

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: -6px;
`;

export const StackTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.lightGrey};
  color: ${({ theme }) => theme.black};
`;

export const TechItem = styled.div`
  background: ${({ theme }) => theme.black};
  
  box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.white};
  border: 3px solid ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.white};
  padding: 4px 10px;
  text-align: center;
  border-radius: 5px;
  margin: 6px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const TimeLineElement = styled.div`
  margin-top: 15px;
  margin-right: 10px;
  width: 2px;
  margin-bottom: -15px;
  background: ${({ theme }) => theme.grey};
  position: relative;
  z-index: 2;

  &::after {
    position: absolute;
    content: '';
    top: 42px;
    left: -25px;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
    border: 10px solid ${({ theme }) => theme.black};
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const ExperienceBox = styled(Box)`
  text-align: start;
  display: flex;
  flex-direction: column;
  flex: 1;
  
  opacity: 0;
  transition: all 400ms ease-in;
  &.shown {
    opacity: 1;
    margin-top: 30px;
  }
  &:hover {
    transform: none;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

export const PreText = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: block;
`;

const Tag = styled.span`
  padding: 3px 12px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.black};
  border: 3px solid ${({ theme }) => theme.black};
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
`;

export const Company = styled.a`
  padding: 3px 12px;
  background: ${({ theme }) => theme.darkRed};
  color: ${({ theme }) => theme.white} !important;
  box-shadow: 3px 3px 0px 0px ${({ theme }) => theme.black};
  border: 3px solid ${({ theme }) => theme.black};
  border-radius: 4px;
  font-size: 16px;
  display: flex;
  align-items: center;
  > svg {
    height: 16px;
    width: 16px;
    margin-left: 6px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
  line-height: 26px;
  color: ${({ theme }) => theme.black};
`;

export const Time = styled(Tag)`
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  font-family: 'Mosk';
  align-items: center;
  margin-top: 8px;
  font-size: 32px;
  svg {
    margin-right: 8px;
    font-size: 40px;
  }
`;

export const ExperienceTitle = styled.span`
  line-height: 36px;
  font-size: 32px;
  @media screen and (max-width: 800px) {
    line-height: 32px;
    font-size: 28px;
  } 
`;

export const SubInfo = styled.div`
  margin-top: 10px;
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const DataText = styled.div`
  line-height: 25px;
  color: ${({ theme }) => theme.black};
  blockquote {
    margin: 0;
    padding: 24px;
    font-style: italic;
    background-color: ${({ theme }) => theme.darkRed}60;
    border-radius: 6px;
    position: relative;
    border-left: 4px solid ${({ theme }) => theme.red};
    > p {
      margin: 0;
    }
    &:before {
      content: '"';
      position: absolute;
      top: -3px;
      left: 0px;
      height: 30px;
      width: 30px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.darkRed};
      font-size: 50px;
    }

    &:after {
      content: '"';
      position: absolute;
      bottom: -25px;
      right: 10px;
      height: 30px;
      width: 30px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({ theme }) => theme.darkRed};
      font-size: 50px;
    }
  }
  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.black};
  }

  code[class*='language-'],
  pre[class*='language-'] {
    color: white;
    background: none;
    font-family: Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace;
    font-feature-settings: normal;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    margin-bottom: 0;
    tab-size: 4;
    hyphens: none;
  }

  code[class*='language-'] {
    color: white;
  }

  a {
    color: ${({ theme }) => theme.darkRed} !important;
    text-decoration: underline;
    font-weight: 500;
  }

  /* Code blocks */
  pre[class*='language-'] {
    overflow: auto;
    padding: 1rem;
    margin-top: -5px;
  }

  pre[class*='language-']::-moz-selection {
    /* Firefox */
    background: hsl(207, 4%, 16%);
  }

  pre[class*='language-']::selection {
    /* Safari */
    background: hsl(207, 4%, 16%);
  }

  /* Text Selection colour */
  pre[class*='language-']::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  pre[class*='language-']::selection,
  pre[class*='language-'] ::selection {
    text-shadow: none;
    background: hsla(0, 0%, 100%, 0.15);
  }

  /* Inline code */
  :not(pre) > p > code,
  :not(pre) > ul > li > code {
    border-radius: 0.3em;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
    color: ${({ theme }) => theme.darkRed} !important;
    background: ${({ theme }) => theme.darkRed}22 !important;
    font-style: italic;
  }

  .token.attr-name {
    color: rgb(173, 219, 103);
    font-style: italic;
  }

  .token.comment {
    color: rgb(128, 147, 147);
  }

  .token.string,
  .token.url {
    color: rgb(173, 219, 103);
  }

  .token.variable {
    color: rgb(214, 222, 235);
  }

  .token.number {
    color: rgb(247, 140, 108);
  }

  .token.builtin,
  .token.char,
  .token.constant,
  .token.function {
    color: rgb(130, 170, 255);
  }

  .token.punctuation {
    color: rgb(199, 146, 234);
  }

  .token.selector,
  .token.doctype {
    color: rgb(199, 146, 234);
  }

  .token.class-name {
    color: rgb(255, 203, 139);
  }

  .token.tag,
  .token.operator,
  .token.keyword {
    color: #ba6e73;
  }

  .token.boolean {
    color: rgb(255, 88, 116);
  }

  .token.property {
    color: rgb(128, 203, 196);
  }

  .token.namespace {
    color: rgb(178, 204, 214);
  }

  pre[data-line] {
    padding: 1em 0 1em 3em;
    position: relative;
  }

  .gatsby-highlight-code-line {
    background-color: hsla(0, 0%, 80%, 0.1);
    display: block;
    padding-right: 1em;
    padding-left: 1.25em;
    margin-left: -1.25em;
  }

  .gatsby-highlight {
    margin-bottom: 1.75rem;
    border-radius: 10px;
    background: #1b1b1b;
    border: 1px solid ${({ theme }) => theme.black};
    border-left: 6px solid ${({ theme }) => theme.darkRed};
    -webkit-overflow-scrolling: touch;
    overflow: auto;
  }

  @media (max-width: 672px) {
    .gatsby-highlight {
      border-radius: 0;
    }
  }

  .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }
  p {
    > code {
      color: ${({ theme }) => theme.darkRed};
    }
  }
`;

export const ExperienceDataText = styled(DataText)`
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    padding-left: 1.3em;
  }
  p {
    font-weight: 600; 
    font-size: 18px;
  }
  li:before {
    content: '';
    width: 6px;
    background: ${({ theme }) => theme.white};
    border: 4px solid ${({ theme }) => theme.black};
    border-radius: 10px;
    height: 6px;
    display: inline-block;
    margin-left: -1.3em; /* same as padding-left set on li */
    margin-right: 0.3em;
  }
`;
