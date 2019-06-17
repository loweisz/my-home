import React from 'react';
import * as SC from './header.sc'

import github from '../../images/github_new.svg';
import linkedIn from '../../images/linked_new.svg';
import twitter from '../../images/twitter_new.svg';
import spotify from '../../images/spotify_new.svg';
import avatar from '../../images/avatar.jpg';

const Header = () => (
    <SC.InfoHeader>
        <SC.AvatarImage src={avatar}/>
    </SC.InfoHeader>
)

export default Header;