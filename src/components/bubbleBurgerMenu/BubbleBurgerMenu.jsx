import React, { useEffect, useState } from 'react';
import { BreadOne, BreadTwo, Bubble, BurgerMenu, Patty, SubMenu, Wrapper } from './bubbleBurgerMenu.styles';
import { Link } from '@reach/router';

function BubbleBurgerMenu() {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    window.addEventListener('mousedown', deSelect);
    return () => {
      window.removeEventListener('mousedown', deSelect);
    };
  }, []);

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
          <Link to="/landing/">Mind</Link>
          <Link to="/dev/">Job</Link>
          <Link to="/projects/">Projects</Link>
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
