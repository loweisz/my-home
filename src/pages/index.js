import React, { useState } from 'react';
import CubeMenu from '../components/cubeMenu/CubeMenu';
import {
  Blogs,
  MenuBottom,
  MenuLeft,
  MenuRight,
  MenuTop,
  MobileImage,
  PageContainer,
  TextSection,
  LowerPart, Inner, UpperPart, BlockPart, Title,
} from '../styles/pages.sc';
import { navigate } from '@reach/router';
import { FiBox, FiUser, FiFile } from 'react-icons/fi';
import BlobOne from '../images/blobs/blob_one.svg';
import BlobTwo from '../images/blobs/blob_two.svg';
import LayoutBackground from '../components/layoutBackground';
import { AvatarImage, CubeAvatarImage } from '../components/header/header.sc';
import Avatar from '../images/data/avatar.png';
import NavigationElement from '../components/cubeNavigation/NavigationElement';
import SocialElement from '../components/cubeNavigation/SocialElement';
import SEO from '../components/seo.helper';
import TitleText from '../components/header/Title';
import ThemeToggle from '../components/themeToggle/ThemeToggle';
import { GlobalStyle } from '../components/layout.styles';
import BlogPart from '../components/blog/BlogPart';
import { graphql } from 'gatsby';

export const SELECT_ANIMATION_TIME = 1500;

const StartPage = ({ data }) => {
  const [isSelected, setIsSelected] = useState(null);
  const [isNavigated, setIsNavigated] = useState(false);

  const select = (loc) => {
    setIsSelected(loc);
    window.scrollTo(0,0)
    if (window.innerWidth < 800) {
      setIsNavigated(true);
      navigate(loc);
    } else {
      setTimeout(() => {
        navigate(loc);
        setIsNavigated(true);
      }, SELECT_ANIMATION_TIME);
    }
  };

  const [hovered, setHovered] = useState(null);

  const setThisHovers = (id) => {
    setHovered(id);
  };

  const resetHovered = () => {
    setHovered(null);
  };

  return (
    <LayoutBackground>
      <GlobalStyle />
      <SEO title="Welcome" description="Welcome to my website" />
      <UpperPart>
        <PageContainer>
        <MobileImage>
          <CubeAvatarImage>
            <img alt="avatar" src={Avatar} />
          </CubeAvatarImage>
        </MobileImage>
        {!isNavigated && (
          <>
            <MenuTop>
              <NavigationElement
                select={select}
                blob={<BlobOne />}
                icon={<FiBox />}
                isSelected={isSelected === '/dev'}
                url={'/dev'}
                name={'Journey'}
              />
            </MenuTop>
            <MenuLeft>
              <NavigationElement
                select={select}
                blob={<BlobTwo />}
                icon={<FiUser />}
                isSelected={isSelected === '/landing'}
                url={'/landing'}
                name={'About'}
              />
            </MenuLeft>
            <MenuRight>
              <NavigationElement
                select={select}
                blob={<BlobTwo />}
                icon={<FiFile />}
                isSelected={isSelected === '/blog'}
                url={'/blog'}
                name={'Blog'}
              />
            </MenuRight>
            <MenuBottom>
              <SocialElement centered setHovered={setThisHovers} resetHovered={resetHovered} />
            </MenuBottom>
            <ThemeToggle />
            <CubeMenu hovered={hovered} isSelected={!!isSelected} />
          </>
        )}
      </PageContainer>
      </UpperPart>
      <BlockPart />
      <LowerPart>
        <Title>Latest articles:</Title>
        <Inner>

          <Blogs>
            {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
              <BlogPart key={node.id} node={node} />
            ))}
          </Blogs>

        </Inner>
        <Title>Read More -></Title>
      </LowerPart>
    </LayoutBackground>
  );
};

export default StartPage;

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { nin: ["exp", "edu"] } } }
      sort: { fields: frontmatter___index, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            abstract
            date
            heroImage {
              childImageSharp {
                sizes(maxWidth: 1000) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          timeToRead
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;
