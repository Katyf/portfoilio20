import {animated, useSpring} from "react-spring";
import React from "react";

<animated.div style={cprops}>
    {cprops.number.interpolate(x => x.toFixed(0))}
</animated.div>


import React, {useCallback, useEffect, useRef, useState} from "react";
import {animated, useTransition} from "react-spring";
import './comp1.scss';

import React, {useCallback, useEffect, useRef, useState} from "react";
import {animated, useTransition} from "react-spring";
import './comp1.scss';


export const Hero = () => {
    const ref = useRef([])
    const [items, set] = useState(['katy', 'feng']);
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#8fa5b6' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: '#28d79f' },
            { transform: 'perspective(600px) rotateX(0deg)' },
        ],
        leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: { color: '#28b4d7' },
    });

    const props = useSpring({
        from: { opacity: 0, height: 0, innerHeight: 0, color: '#8fa5b6' },
        to: { opacity: 1, height: 80, innerHeight: 80 }
    })

    const reset = useCallback(() => {
        debugger;
        ref.current.map(clearTimeout);
        ref.current = [];
        set([]);
        ref.current.push(setTimeout(() => set(['Katy', 'Designer', 'Feng']), 2000));
        ref.current.push(setTimeout(() => set(['Katy', 'Feng']), 5000));
        ref.current.push(setTimeout(() => set(['Katy', 'Developer', 'Feng']), 8000));
    }, [])

    useEffect(() => {
        setTimeout(() => set(reset()), 2000)
    }, []);

    return (
        <div className='comp1'>
            <div>
                <animated.div className="transitions-item" key={key} style={rest}>
                    <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                </animated.div>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
            </div>
        </div>
    )
}