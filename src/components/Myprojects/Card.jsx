import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';




function Card({ children,cardStyle={},yourClass=""}) {

    const classes = `card ${yourClass}`
 
    const ref = useRef();

    const [isHovered, setHovered] = useState(false);
  
    const [animatedProps, setAnimatedProps] = useSpring(() => {
      return {
        xys: [0, 0, 1],
        config: { mass: 10, tension: 400, friction: 40, precision: 0.00001 }
      };
    });
  
    return (
      <animated.div
        ref={ref}
        className={classes}
        
        onMouseEnter={() => setHovered(true)}
        onMouseMove={({ clientX, clientY }) => {

          const x =
            clientX -
            (ref.current.offsetLeft -
              (window.scrollX || window.pageXOffset || document.body.scrollLeft));
  

          const y =
            clientY -
            (ref.current.offsetTop -
              (window.scrollY || window.pageYOffset || document.body.scrollTop));
  
         
          const dampen = 50; 
          const xys = [
            -(y - ref.current.clientHeight / 2) / dampen, 
            (x - ref.current.clientWidth / 2) / dampen,
            1.07 
          ];
          setAnimatedProps.start({ xys: xys });
        }}
        onMouseLeave={() => {
          setHovered(false);
          setAnimatedProps.start({ xys: [0, 0, 1] });
        }}
        style={{...{
          zIndex: isHovered ? 2 : 1,
          transform: animatedProps.xys.to(
            (x, y, s) =>
              `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
          )
        },...cardStyle}}
      >
        {children}
      </animated.div>
    );
  }

  export default Card