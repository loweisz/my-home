import React from 'react'
import Particles from 'react-particles-js';
import { LeftHero } from './animationSection.sc';
import { particleParams } from './particles.constants';

const AnimationSection = (props) => (
    <LeftHero color={props.color}>
        <Particles
            params={particleParams}
            height="100vh"
            width="100%"
        />
    </LeftHero>
)

export default AnimationSection;