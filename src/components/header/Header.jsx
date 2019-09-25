import React from 'react';

import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Title } from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../../pages/start';

const Header = () => (
  <InfoHeader>
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
      <Title>**REPLACE**</Title>
    </HeaderSection>
    <HeaderSection>
      <ImageContainer>
        <AvatarImage src="https://picsum.photos/200" />
      </ImageContainer>
    </HeaderSection>
  </InfoHeader>
);

export default Header;
