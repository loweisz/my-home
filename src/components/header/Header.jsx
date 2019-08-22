import React from 'react';
import { Link } from 'gatsby'

import github from '../../images/github_new.svg';
import linkedIn from '../../images/linked_new.svg';
import twitter from '../../images/twitter_new.svg';
import spotify from '../../images/spotify_new.svg';

import {AvatarImage, HeaderSection, ImageContainer, LinkContainer, LinkImg, Title} from "./header.sc";
import {InfoHeader} from "./header.sc";

const Header = () => (
    <InfoHeader>
        <HeaderSection>
            <LinkContainer>
                <Link><LinkImg src={github} /></Link>
                <Link><LinkImg src={linkedIn} /></Link>
                <Link><LinkImg src={twitter} /></Link>
                <Link><LinkImg src={spotify} /></Link>
            </LinkContainer>
        </HeaderSection>
        <HeaderSection>
            <Title>Lorenz Weiß</Title>
        </HeaderSection>
        <HeaderSection>
          <ImageContainer>
            <AvatarImage  />
          </ImageContainer>
        </HeaderSection>
    </InfoHeader>
)

export default Header;
