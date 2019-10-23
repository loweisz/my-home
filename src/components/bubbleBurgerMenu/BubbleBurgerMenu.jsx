import React, { useState } from 'react';
import { BreadOne, BreadTwo, Bubble, BurgerMenu, Patty, SubMenu, Wrapper } from './bubbleBurgerMenu.styles';
import { Link } from '@reach/router';

function BubbleBurgerMenu() {
  const [selected, setSelected] = useState(false);
  const select = () => {
    setSelected((s) => !s);
  };
  const deSelect = () => {
    setSelected(false);
  };
  return (
    <Wrapper>
      {selected && (
        <SubMenu onClick={deSelect}>
          <Link to="/landing/">Developer</Link>
          <Link to="/projects/">Projects</Link>
          <Link to="/dev/">Blog</Link>
        </SubMenu>
      )}
      <Bubble selected={selected} onClick={select}>
        <BurgerMenu selected={selected}>
          <BreadOne selected={selected} />
          <Patty selected={selected} />
          <BreadTwo selected={selected} />
        </BurgerMenu>
      </Bubble>
    </Wrapper>
  );
}

export default BubbleBurgerMenu;
