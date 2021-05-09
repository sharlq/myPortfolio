import React, {useState,useEffect} from 'react'
import Particles from 'react-particles-js'
import { useSpring, animated,config } from 'react-spring'
import {Typewriter} from 'typewriter-effect'

const Intro = () => {
    const [flip, setFlip] = useState(false)
 
    const words = ["React Front-end Developer", "Mechatronics Engineer"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [blink, setBlink] = useState(true);
    const [reverse, setReverse] = useState(false);
  
    useEffect(() => {
        
      if (index === words.length) return;
  
      if ( subIndex === words[index].length + 1 && 
          index !== words.length - 1 && !reverse ) {
        setReverse(true);
        return;
      }
  
      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => prev + 1);
        return;
      }
  
      const timeout = setTimeout(() => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 :
                  150, parseInt(Math.random() * 350)));
  
      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);
  
 
    useEffect(() => {
      const timeout2 = setTimeout(() => {
        setBlink((prev) => !prev);
      }, 500);
      return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className="intro">
            <Particles height="80%" className="particles"
            
            params={{
                particles: {
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "#3CA9D1",
                            blur: 0
                        }
                    }
                }
            }}
            />
            <div className="textContainer">
            <h1>Shehab Khader</h1>
            

        <h5 className="title">
         {`${words[index].substring(0, subIndex)}${blink ? "|" : "  "}`}
      </h5>
      
            </div>
        </div>
    )
}

export default Intro
