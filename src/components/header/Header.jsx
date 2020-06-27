import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile } from './header.sc';
import { useLocation } from '@reach/router';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../cubeNavigation/SocialElement';
import Img from 'gatsby-image';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';
import { Link } from 'gatsby';
import TitleText from './Title';

const Header = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;
  const location = useLocation();

  const data = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "data/avatar.png" }) {
          childImageSharp {
            sizes(maxWidth: 472) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `,
  );

  return (
    <InfoHeader style={{ height: `${40 - 30 * percentageScrolled}px` }}>
      <Mobile>
        <BubbleBurgerMenu />
      </Mobile>
      <HeaderSection onlyDesktop>
        <LinkContainer>
          {Object.values(iconsObj).map((obj) => (
            <a
              key={obj.link}
              aria-label={obj.name}
              style={{ fontSize: `${35 - 10 * percentageScrolled}px` }}
              href={obj.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {obj.icon()}
            </a>
          ))}
        </LinkContainer>
      </HeaderSection>
      <HeaderSection>
        <Link to={'/'}>
          <TitleText />
        </Link>
      </HeaderSection>
      <HeaderSection>
        <ImageContainer>
          {!['/landing', '/landing/'].includes(location.pathname) && (
            <AvatarImage
              style={{
                height: `${130 - percentageScrolled * 50}px`,
                width: `${130 - percentageScrolled * 50}px`,
                marginTop: `${70 - percentageScrolled * 25}px`,
              }}
            >
              <Img title="Avatar image" alt="Avatar Image" sizes={data.avatarImage.childImageSharp.sizes} />
            </AvatarImage>
          )}
        </ImageContainer>
      </HeaderSection>
    </InfoHeader>
  );
};

export default Header;
