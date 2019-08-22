import React from 'react';
import { Link } from 'gatsby';
import * as SC from './tabs.sc';
import work from '../../images/work.svg';
import life from '../../images/life.svg';

const Tabs = (props) => (
    <div>
    <SC.InfoTabBar>
        <Link to={'/dev'}>
            <SC.Tab color={props.color} > Developer </SC.Tab>
        </Link>
        <Link to={'/blog'}>
            <SC.Tab color={props.color}> Blog </SC.Tab>
        </Link>
        <Link to={'/blog'}>
            <SC.Tab color={props.color}> Other </SC.Tab>
        </Link>
    </SC.InfoTabBar>
    </div>
)

export default Tabs;
