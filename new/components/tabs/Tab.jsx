import React, { useState } from 'react';
import Annotation from '../Annotation';
import { TabInner, TabElement } from './tabs.sc';
import Link from 'next/link';


export const Tab = ({ route }) => {
  const [hovered, setHovered] = useState(false);

  const onMouseOver = () => {
    setHovered(true);
  };

  const onMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link key={route.url} href={route.url}>
      <TabElement onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
        <Annotation strokeWidth="4" type="box" show={hovered}>
          <TabInner>
            <span>{route.name}</span>
          </TabInner>
        </Annotation>
      </TabElement>
    </Link>
  );
};

export default Tab;
