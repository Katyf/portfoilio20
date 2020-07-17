import React, {useCallback, useEffect, useRef, useState} from "react";
import {animated, useSpring, useTransition} from "react-spring";
import './comp1.scss';


export const Hero = () => {
    const [items, setItems] = useState([]);
    const [started, setStarted] = useState(false);
    const transitions = useTransition(items, null, {
        from: { opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: 'black' },
        enter: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: 'white' },
            { transform: 'perspective(600px) rotateX(0deg)', color: '#353434'  },
        ],
        leave: [{ color: '#9bc0fa' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
        update: [
            { opacity: 1, height: 80, innerHeight: 80 },
            { transform: 'perspective(600px) rotateX(180deg)', color: 'white' },
            { transform: 'perspective(600px) rotateX(0deg)', color: '#353434'  },
        ],
    });

    const props = useSpring({
        from: { opacity: 0, height: 0, innerHeight: 0, color: '#8fa5b6' },
        to: { opacity: 1, height: 80, innerHeight: 80, color: '#F4edea' }
    })

    const reset = () => {
        setTimeout(() => setItems(['Designer']), 2000);
        setTimeout(() => setItems([]), 5000);
        setTimeout(() => setItems(['Developer']), 8000);
        setTimeout(() => setItems([]), 11000);
    };

    useEffect(() => {
        reset();
        if (!started)
            setInterval(() => {
                setStarted(true);
                reset();
        }, 13000);
        return () => {
            clearInterval();
            clearTimeout();
        };
    }, []);

    return (
        <div className='comp1'>
            <div>
                <animated.div className="transitions-item" style={props}>
                    Katy
                </animated.div>
                {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                    <animated.div className="transitions-item" key={key} style={rest}>
                        <animated.div style={{ overflow: 'hidden', height: innerHeight }}>{item}</animated.div>
                    </animated.div>
                ))}
                <animated.div className="transitions-item" style={props}>
                    Feng
                </animated.div>
            </div>
        </div>
    )
}