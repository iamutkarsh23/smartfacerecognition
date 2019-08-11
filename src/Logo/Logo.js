import React from 'react';
import Tilt from 'react-tilt';
import FaceID from './face-id.png';
import './Logo.css';

const Logo = () =>{
    return(
        <div className = 'ma4 mt0'>
            <Tilt className="Tilt br2 shadow-3" options={{ max : 45 }} style={{ height: 125, width: 125 }} >
                <div className="Tilt-inner pa3"> <img alt='Logo' src = {FaceID} /> </div>
            </Tilt>
        </div>
    );
}

export default Logo;