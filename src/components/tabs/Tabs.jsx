import React from 'react';
import { Link } from 'gatsby';
import * as SC from './tabs.sc';

const Tabs = (props) => (
    <SC.TabSection additionalOpacity={props.additionalOpacity}>
        <SC.InfoTabBar>
            <Link to={'/landing'}>
                <SC.Tab color={props.color} > ONE </SC.Tab>
            </Link>
            <Link to={'/dev'}>
                <SC.Tab color={props.color}> TWO </SC.Tab>
            </Link>
            <Link to={'/three'}>
                <SC.Tab color={props.color}> THREE </SC.Tab>
            </Link>
        </SC.InfoTabBar>
    </SC.TabSection>
)

export default Tabs;
