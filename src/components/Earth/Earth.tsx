import React from 'react';
import earth from '../../../public/earth.png';
import './Earth.scss';

const Earth = () => {
    return (
        <div className={'earth'}>
            <img src={earth}
                 alt="Earth"
                 className={'earth_image'}/>
        </div>
    );
};

export default Earth;
