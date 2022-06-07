import React from 'react';
import { AvatarImage, HeaderSection, ImageContainer, LinkContainer, Mobile } from './header.sc';

import { InfoHeader } from './header.sc';
import { iconsObj } from '../cubeNavigation/SocialElement';
import BubbleBurgerMenu from '../bubbleBurgerMenu/BubbleBurgerMenu';

import TitleText from './Title';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Avatar from '../../public/assets/avatar.png';
import Image from 'next/image';

const Header = (props) => {
  console.log(props.offset);
  const percentageScrolled = (props.offset % 95) / 94;
  const { pathname } = useRouter()
  // const location = useLocation();
  //
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       avatarImage: file(relativePath: { eq: "data/avatar.png" }) {
  //         childImageSharp {
  //           sizes(maxWidth: 472) {
  //             ...GatsbyImageSharpSizes
  //           }
  //         }
  //       }
  //     }
  //   `,
  // );

  return (
    <InfoHeader style={{ height: `${80 - 30 * percentageScrolled}px` }}>
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
        <Link href={'/'}>
          <TitleText />
        </Link>
      </HeaderSection>
      <HeaderSection>
        <ImageContainer
          style={{
            marginTop: `${140 - percentageScrolled * 55}px`,
          }}
        >
          {!['/landing', '/landing/'].includes(pathname) && (
            <AvatarImage
              style={{
                height: `${130 - percentageScrolled * 50}px`,
                width: `${130 - percentageScrolled * 50}px`,
                marginTop: `${70 - percentageScrolled * 35}px`,
              }}
            >
              <Image height={`${130 - percentageScrolled * 50}px`} width={`${130 - percentageScrolled * 50}px`} src={Avatar} />
            </AvatarImage>
          )}
        </ImageContainer>
      </HeaderSection>
    </InfoHeader>
  );
};

export default Header;
