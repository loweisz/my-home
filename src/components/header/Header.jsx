import React from 'react';
import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile, Title } from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../cubeNavigation/SocialElement';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';
import { Link } from 'gatsby';

import Avatar from '../../images/data/avatar.jpg';

const Header = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;

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
        <Link to={'/start'}>
          <Title>{'<Lorenz Weiß 👋/>'}</Title>
        </Link>
      </HeaderSection>
      <HeaderSection>
        <ImageContainer>
          <AvatarImage
            style={{
              height: `${130 - percentageScrolled * 50}px`,
              width: `${130 - percentageScrolled * 50}px`,
              marginTop: `${70 - percentageScrolled * 25}px`,
            }}
          >
            <img alt="avatar" src={Avatar} />
          </AvatarImage>
        </ImageContainer>
      </HeaderSection>
    </InfoHeader>
  );
};

export default Header;
