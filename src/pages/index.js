import React from 'react'
import CubeMenu from "../components/cubeMenu/CubeMenu";
import {MenuBottom, MenuLeft, MenuRight, MenuText, MenuTop, PageContainer} from "../styles/pages.sc";
import {Link} from "@reach/router";


const IndexPage = () => {
  
  return (
    <PageContainer>
      <MenuTop><Link to="/landing"><MenuText>Developer</MenuText></Link></MenuTop>
      <MenuLeft><Link to="/landing"><MenuText>Blog</MenuText></Link></MenuLeft>
      <MenuRight><Link to="/landing"><MenuText>Projects</MenuText></Link></MenuRight>
      <MenuBottom><Link to="/landing"><MenuText>Career</MenuText></Link></MenuBottom>
      <CubeMenu/>
    </PageContainer>
  );
}

export default IndexPage
