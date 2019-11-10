import React from 'react';
import { Link } from 'gatsby';
import * as SC from './tabs.sc';

const Tabs = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;
  return(
    <SC.TabSection additionalOpacity={percentageScrolled * 0.4}>
      <SC.InfoTabBar 
        style={{
          fontSize: `${30 - percentageScrolled * 5}px`,
          height: `${60 - percentageScrolled * 10}px`,
        }}
      >
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
 }

export default Tabs;
