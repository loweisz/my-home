import React from 'react';

import { 
  AvatarImage,
  HeaderSection,
  ImageContainer,
  LinkContainer,
  Mobile,
  Title,
  Desktop
} from './header.sc';
import { InfoHeader } from './header.sc';
import { iconsObj } from '../../pages/start';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';
import { Link } from 'gatsby';
import Avatar from '../../images/data/avatar.png';

const Header = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;

  return (
    <InfoHeader style={{ height: `${70 - 60*percentageScrolled}px`}}>
      <Mobile>
        <BubbleBurgerMenu />
      </Mobile>
      <HeaderSection>
        <Desktop>
          <LinkContainer>
            {Object.values(iconsObj).map((obj) => (
              <a style={{ fontSize: `${35 - 10*percentageScrolled}px`}} href={obj.link} target="_blank" rel="noopener noreferrer">
                {obj.icon()}
              </a>
            ))}
          </LinkContainer>
        </Desktop>
      </HeaderSection>
      <HeaderSection>
        <Link to={'/start'}>
          <Title>
            {'<Lorenz Weiß />'}
          </Title>
        </Link>
      </HeaderSection>
      <HeaderSection>
        <ImageContainer>
          <AvatarImage
            style={{
              height: `${130 - percentageScrolled * 50}px`,
              width: `${130 - percentageScrolled * 50}px`,
              marginTop: `${percentageScrolled * 40}px`,
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
