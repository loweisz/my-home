import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HeaderItem = styled.div`
  padding: 5px;
  font-weight: 600;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  &:after {
    content: '';
    height: 2px;
    width: 0;
    background-color: black;
    position: absolute;
    left: 0;
    transition: width 0.5s ease-out;
  }
  &:before {
    content: '';
    height: 2px;
    width: 0;
    background-color: black;
    position: absolute;
    left: 0;
    top: 0;
    transition: width 0.5s ease-out;
  }
  &:hover {
    &:after {
      width: 100%;
    }
    &:before {
      width: 100%;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <HeaderItem> THEMA 1 </HeaderItem>
    <HeaderItem> THEMA 2 </HeaderItem>
    <HeaderItem> THEMA 3 </HeaderItem>
    <HeaderItem> THEMA 4 </HeaderItem>
  </HeaderWrapper>
)

export default Header
