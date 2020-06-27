import React, { useState } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { TabSection, InfoTabBar, TabInner, TabElement } from './tabs.sc';
import { Link } from 'gatsby';
import { FiChevronsRight } from 'react-icons/fi';

export const Tab = ({ route }) => {
  const [hovered, setHovered] = useState(false);

  const onMouseOver = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link key={route.url} to={route.url}>
      <TabElement onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <RoughNotation strokeWidth="4" type="box" show={hovered}>
          <TabInner>
            <span>{route.name}</span>
          </TabInner>
        </RoughNotation>
      </TabElement>
    </Link>
  );
};

export default Tab;
