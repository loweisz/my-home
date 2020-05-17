import React, { useState } from 'react';
import { IoLogoTwitter } from 'react-icons/io';
import { ShareBoard, CopyElement, SuccessBox } from './shareWidet.styles';
import { FiLink } from 'react-icons/fi';
import { useRef } from 'react';
import { useEffect } from 'react';

function ShareWidget({ post }) {
  function clickShare() {
    window.open(this.href, 'twitter-share', 'width=550,height=235');
    return false;
  }

  const copyToClipboard = () => {
    try {
      const el = document.createElement('textarea');
      el.value = document.location.href;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      showSuccessMessage();
      document.body.removeChild(el);
    } catch (e) {
      console.log("couldn't copy");
    }
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const timeout = useRef(null);

  useEffect(
    () => () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    },
    [],
  );

  const showSuccessMessage = () => {
    setIsSuccess(true);
    timeout.current = setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  const tweetLink = `https://twitter.com/share?text=${post.frontmatter.title} by @loweisz&url=${document.location.href}`;
  return (
    <ShareBoard>
      <a href={tweetLink} onClick={clickShare}>
        <IoLogoTwitter />
      </a>
      <CopyElement>
        <FiLink onClick={copyToClipboard} />
        {isSuccess && <SuccessBox>Copied to the clipboard</SuccessBox>}
      </CopyElement>
    </ShareBoard>
  );
}

export default ShareWidget;
