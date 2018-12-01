import React from 'react'
import anime from 'animejs'


const Ball = () => {
    
    anime({
        targets: 'polygon',
        points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96'
    });
    console.log('what')
    
    return (
        <div id="morphing">
            <svg width="128" height="128" viewBox="0 0 128 128">
  <polygon points="64 68.73508918222262 8.574 99.9935923731656 63.35810017508558 67.62284396863708 64 3.993592373165592 64.64189982491442 67.62284396863708 119.426 99.9935923731656"></polygon>
</svg>
        </div>
    )
}

export default Ball
