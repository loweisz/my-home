import React, { useEffect } from 'react';

const IndexPage = () => {
  useEffect(() => {
    window.location = '/start/';
  }, []);
  return <div />;
};

export default IndexPage;
