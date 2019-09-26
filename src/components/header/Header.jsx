import React from 'react';

import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile, Title } from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../../pages/start';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';

const Header = () => (
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
      <Title>Lorenz Weiß</Title>
    </HeaderSection>
    <HeaderSection>
      <ImageContainer>
        <AvatarImage src="https://picsum.photos/200" />
      </ImageContainer>
    </HeaderSection>
  </InfoHeader>
);

export default Header;
