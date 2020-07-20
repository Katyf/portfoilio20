import React from "react";
import { IoMdBuild } from 'react-icons/io';
import './comp1.scss';

export const Projects = () => {

    return (
        <div id='projects' className='section projects'>
            <div className='projects--container'>
                <IoMdBuild />
                <div className=''>In progress... check back soon</div>
            </div>
        </div>
    )
}