import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { BreadOne, BreadTwo, Bubble, BurgerMenu, Patty, SubMenu, Wrapper } from './bubbleBurgerMenu.styles';
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
            initial={{ transform: 'scale(0.158)', transformOrigin: "252px 208px" }}
            animate={{ transform: 'scale(1)' }}
            exit={{ transform: 'scale(0.158)'}}
          >
            <SubMenu onClick={deSelect}>
              <Link to="/landing/">
                <FiUser /> <span>About</span>
              </Link>
              <Link to="/dev/">
                <FiBox /> <span>CV</span>
              </Link>
              <Link to="/blog/">
                <FiFile /> <span>Blog</span>
              </Link>
            </SubMenu>
          </motion.div>
        )}
      </AnimatePresence>
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
