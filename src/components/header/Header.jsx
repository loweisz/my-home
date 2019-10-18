import React from 'react';

import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile, Title } from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../../pages/start';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';

const Header = (props) => {
  const percentageScrolled = ((props.offset % 56)/55);

  return (
    <InfoHeader>
      <Mobile>
        <BubbleBurgerMenu/>
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
          <AvatarImage
            style={{
              height: `${130 - (percentageScrolled * 80)}px`,
              width: `${130 - (percentageScrolled * 80)}px`,
              marginTop: `${percentageScrolled * 50}px`,
            }}
            src="https://picsum.photos/200"
          />
      </ImageContainer>
    </HeaderSection>
  </InfoHeader>
  )
};

export default Header;
