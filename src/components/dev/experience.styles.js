import styled from 'styled-components';
import { moveFadeIn } from '../../styles/animations';

export const TechStack = styled.div`
  display: flex;
`;

export const TechItem = styled.div`
  background: rgba(112,7,0, 0);
  color: ${({ theme }) => theme.white};
  padding: 4px 10px;
  text-align: center;
  border-radius: 5px;
  margin-left: 10px;
  &:first-child {
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

export const TimeLineElement = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  width: 2px;
  margin-bottom: -15px;
  background: ${({ theme }) => theme.white};
  position: relative;
  z-index: -1;
  &::after {
    position: absolute;
    content: "";
    top: 42px;
    left: -6px;
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: ${({ theme }) => theme.white};
  }
`;

export const ExperienceBox = styled.div`
  padding: 25px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  text-align: start;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  color: white;
  margin-top: 15px;
  flex: 1;
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
`

export const ShowMoreToggle = styled.button`
  margin-top: 15px;
  background: none;
  border: none;
  font-size: 15px;
  text-align: end;
  padding: 10px;
  cursor: pointer;
  color: white;
  background: rgba(0,0,0,0.1);
  &:hover {
    background: rgba(0,0,0,0.2);
  }
`

export const Icon = styled.span`
  font-size: 30px;
`;

export const Company = styled.a`
  margin-left: 10px;
  padding: 6px;
  background: rgba(255,255,255,0.2);
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
`;

export const Title = styled.span`
  font-size: 24px;
  line-height: 26px;
  `;

export const Time = styled.span`
  padding: 6px;
  background: rgba(255,255,255,0.2);
  color: ${({ theme }) => theme.white};
  border-radius: 4px;
  font-size: 16px;
  text-decoration: none;
  margin-left: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 8px;
  svg {
    margin-right: 8px;
    font-size: 24px;
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
    color: ${({ theme }) => theme.grey};
  }

  a {
    color: ${({ theme }) => theme.red};
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
  :not(pre) > code[class*='language-'] {
    border-radius: 0.3em;
    background: black;
    color: #CB772F;
    padding: 0.15em 0.2em 0.05em;
    white-space: normal;
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
    background-color: hsla(0,0%,80%, 0.1);
    display: block;
    padding-right: 1em;
    padding-left: 1.25em;
  }
  
  .gatsby-highlight {
    margin-bottom: 1.75rem;
    border-radius: 10px;
    background: #320A28;
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
`;
