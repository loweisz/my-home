import React from 'react';
import * as SC from './header.sc'

import github from '../../images/Github.png';
import linkedIn from '../../images/LinkedIn.png';
import twitter from '../../images/twitter.png';
import spotify from '../../images/Spotify.png';
import avatar from '../../images/avatar.jpg';

const Header = () => (
    <SC.InfoHeader>
        <SC.SocialSection>
            <SC.SocialIcon src={github}/>
            <SC.SocialIcon src={linkedIn}/>
        </SC.SocialSection>
        <SC.AvatarImage src={avatar}/>
        <SC.SocialSection>
            <SC.SocialIcon src={twitter}/>
            <SC.SocialIcon src={spotify}/>
        </SC.SocialSection>
    </SC.InfoHeader>
)

export default Header;