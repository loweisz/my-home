import React from 'react';

import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile, Title } from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../../pages/start';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';
import { Link } from 'gatsby';
import Avatar from '../../images/data/avatar.png';

const Header = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;

  return (
    <InfoHeader>
      <Mobile>
        <BubbleBurgerMenu />
      </Mobile>
      <HeaderSection>
        <LinkContainer>
          {Object.values(iconsObj).map((obj) => (
            <a href={obj.link} target="_blank" rel="noopener noreferrer">
              {obj.icon()}
            </a>
          ))}
        </LinkContainer>
      </HeaderSection>
      <HeaderSection>
        <Link to={'/start'}>
          <Title>{'<Lorenz Weiß />'}</Title>
        </Link>
      </HeaderSection>
      <HeaderSection>
        <ImageContainer>
          <AvatarImage
            style={{
              height: `${130 - percentageScrolled * 40}px`,
              width: `${130 - percentageScrolled * 40}px`,
              marginTop: `${percentageScrolled * 100}px`,
            }}
          >
            <img src={Avatar} />
          </AvatarImage>
        </ImageContainer>
      </HeaderSection>
    </InfoHeader>
  );
};

export default Header;
