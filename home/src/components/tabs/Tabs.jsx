import React from 'react';
import * as SC from './tabs.sc';
import work from '../../images/work.svg';
import life from '../../images/life.svg';

const Tabs = () => (
    <SC.InfoTabBar>
        <SC.Tab> DEVELOPER <SC.TabIcon src={work}/> </SC.Tab>
        <SC.Title>
            <span>{"<Lorenz Weiß />"}</span>
            <SC.SubTitle>Web Developer</SC.SubTitle>
        </SC.Title>
        <SC.Tab> LIFE <SC.TabIcon src={life}/></SC.Tab>
    </SC.InfoTabBar>
)

export default Tabs;