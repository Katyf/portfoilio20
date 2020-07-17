import React, {useState, useEffect, useRef} from "react";
import Navbar from "../components/navbar";

const Layout = (props) => {
    const [condensed, setCondensed] = useState(false);
    const containerRef = useRef();
    const scrollThreshold = 1;

    const handleScroll = () => {
        const scrollTop = containerRef.current.scrollTop;
        if (scrollTop >= scrollThreshold) {
            setCondensed(true);
        } else {
            setCondensed(false);
        }
    }

    useEffect( () => {
        containerRef.current.addEventListener('scroll', handleScroll);

        return () => containerRef.current.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <Navbar
                condensed={condensed}
            />
            <div className='container' ref={containerRef}>
                {props.children}
            </div>
        </div>
    );
}

export default Layout;