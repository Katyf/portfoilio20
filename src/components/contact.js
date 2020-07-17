import React, {useEffect, useRef, useState} from "react";
import {createObserver} from "../utils/observer";
import {animated, useSpring} from "react-spring";

import { IoIosAt, IoLogoLinkedin} from 'react-icons/io';
import './comp1.scss';
import './contact.scss';


export const Contact = () => {
    const [shouldShow, setShouldShow] = useState(false);
    const elRef = useRef(null);
    const props = useSpring({opacity: 1, marginTop: 0, from: {opacity: 0, marginTop: -500}});

    useEffect(() => {
        const currentRef = elRef.current;
        const positionObserver = createObserver(elRef.current, {
            onIntersect: () => {
                setShouldShow(true);
                console.log('instersect');
            },
            onDeIntersect: () => {
                setShouldShow(false);
                console.log('DEinstersect');
            },
            rootMargin: '-50px',
            shouldDetachOnIntersect: false
        });
        positionObserver.observe(elRef.current);
        return () => {
            positionObserver.unobserve(currentRef);
        };}, []
    );

    return (
        <div className='section contact' ref={elRef}>
            <div className='contact--block'>
                <div className='contact--title'>
                    {shouldShow &&
                    <animated.div className='transition-item' style={props}>
                        Get In Touch
                    </animated.div>
                    }
                    <div className={`contact--underline ${shouldShow}`}></div>
                </div>

                <div className='contact--icons'>
                    <IoIosAt />
                    <IoLogoLinkedin />
                </div>
            </div>
        </div>
    )
}