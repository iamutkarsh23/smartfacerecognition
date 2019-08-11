import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({singlebox}) =>{
    return(
        <div className='bounding-box' style={{top: singlebox.topRow, right: singlebox.rightCol, bottom: singlebox.bottomRow, left: singlebox.leftCol}}></div>
    );
}

export default FaceRecognition;