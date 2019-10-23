import React from 'react';
import { Link } from 'gatsby';
import * as SC from './tabs.sc';

const Tabs = (props) => (
  <SC.TabSection additionalOpacity={props.additionalOpacity}>
    <SC.InfoTabBar>
      <Link to={'/landing'}>
        <SC.Tab color={props.color}> Mind </SC.Tab>
      </Link>
      <Link to={'/dev'}>
        <SC.Tab color={props.color}> Jobs </SC.Tab>
      </Link>
      <Link to={'/projects'}>
        <SC.Tab color={props.color}> Projects </SC.Tab>
      </Link>
    </SC.InfoTabBar>
  </SC.TabSection>
);

export default Tabs;
