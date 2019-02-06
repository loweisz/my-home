import React from 'react';
import * as SC from './tabs.sc';
import work from '../../images/work.svg';
import life from '../../images/life.svg';

const Tabs = () => (
    <div>
    <SC.Title>
        <span>{"<Lorenz Weiß />"}</span>
        <SC.SubTitle>Web Developer</SC.SubTitle>
    </SC.Title>
    <SC.InfoTabBar>
        <SC.Tab> Developer </SC.Tab>
        <SC.Tab> Life </SC.Tab>
        <SC.Tab> Blog </SC.Tab>
    </SC.InfoTabBar>
    </div>
)

export default Tabs;