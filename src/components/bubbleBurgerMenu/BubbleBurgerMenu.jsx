import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BreadOne,
  BreadTwo,
  Bubble,
  BurgerMenu,
  Patty,
  SubMenu,
  Wrapper,
  SubMenuBackground,
} from './bubbleBurgerMenu.styles';
import { Link } from '@reach/router';
import { FiBox, FiUser, FiFile } from 'react-icons/fi';

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
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ transform: 'scale(0.1)', transformOrigin: '390px 345px' }}
            animate={{ transform: 'scale(5)' }}
            exit={{ transform: 'scale(0.1)' }}
          >
            <SubMenuBackground onClick={deSelect} />
          </motion.div>
        )}
      </AnimatePresence>
      {selected && (
        <SubMenu>
          <Link to="/landing/">
            <span>About</span>
          </Link>
          <Link to="/dev/">
            <span>Journey</span>
          </Link>
          <Link to="/blog/">
            <span>Blog</span>
          </Link>
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
