import React from "react";
import {Spring} from "react-spring/renderprops-universal";
import {useSpring, animated} from "react-spring";
import './comp1.scss';
import {Hero} from "./hero";

export const Comp1 = () => {
    const props = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -500}});

    return (
        <div className='section main'>
            <Hero />
            <div className='comp2'>
                <div className='comp2--content'>
                    <animated.div style={props}>
                        I'm a front-end developer based in NYC with a background in art & design.
                    </animated.div>
                </div>
            </div>
        </div>
    )
}