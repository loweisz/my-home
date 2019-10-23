import React from 'react';
import styled from 'styled-components';

const WaveWrapper = styled.div`
  z-index: 1;
  height: 100%;
  width: 100vw;
  position: fixed;
  display: flex;
  bottom: 0;
  flex-direction: column;
  justify-content: flex-end;
`;

const Wave = () => (
  <WaveWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="rgba(255,255,255, 0.2)"
        fillOpacity="1"
        d="M0,224L24,208C48,192,96,160,144,170.7C192,181,240,235,288,240C336,245,384,203,432,181.3C480,160,528,160,576,186.7C624,213,672,267,720,256C768,245,816,171,864,128C912,85,960,75,1008,80C1056,85,1104,107,1152,133.3C1200,160,1248,192,1296,181.3C1344,171,1392,117,1416,90.7L1440,64L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      />
    </svg>
  </WaveWrapper>
);

export default Wave;
