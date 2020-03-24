import React from 'react';
import { Link } from 'gatsby';
import { Tab, TabSection, InfoTabBar } from './tabs.sc';

const routes = [
  {
    url: '/landing',
    name: 'About',
  },
  {
    url: '/dev',
    name: 'Career',
  },
  {
    url: '/blog',
    name: 'Blog',
  },
];

const Tabs = (props) => {
  const percentageScrolled = (props.offset % 95) / 94;
  return (
    <TabSection additionalOpacity={percentageScrolled * 0.4}>
      <InfoTabBar
        style={{
          fontSize: `${30 - percentageScrolled * 5}px`,
          height: `${60 - percentageScrolled * 10}px`,
        }}
      >
        {routes.map((route) => (
          <Link key={route.url} to={route.url}>
            <Tab>{route.name}</Tab>
          </Link>
        ))}
      </InfoTabBar>
    </TabSection>
  );
};

export default Tabs;
