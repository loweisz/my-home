import React from 'react';
import { TabSection, InfoTabBar } from './tabs.sc';
import Tab from './Tab';

const routes = [
  {
    url: '/landing',
    name: 'Hello',
  },
  {
    url: '/dev',
    name: 'About',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
];

const Tabs = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;
  return (
    <TabSection fixed={props.fixed} additionalOpacity={percentageScrolled * 0.4}>
      <InfoTabBar
        style={{
          fontSize: `${30 - percentageScrolled * 5}px`,
          height: `${70 - percentageScrolled * 10}px`,
        }}
      >
        {routes.map((route) => (
          <Tab route={route} />
        ))}
      </InfoTabBar>
    </TabSection>
  );
};

export default Tabs;
