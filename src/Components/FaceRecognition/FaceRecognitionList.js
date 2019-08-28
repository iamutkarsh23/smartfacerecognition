import React from 'react';
import FaceRecognition from './FaceRecognition';

var numFaces;

const FaceRecognitionList = ({name, box, imageURL}) =>{

    const thisBox = box.map((singlebox,i) => {
        return  <FaceRecognition  key= {i} singlebox = {singlebox}/>
    })

    numFaces = thisBox.length;

    return(
        <div className = "center ma">
            <div className="absolute mt2">
                <img id="inputImage" src = {imageURL} alt="" width='500px' height='auto'/>
                {thisBox}
            </div>
        </div>
            
    );
}

export { FaceRecognitionList, numFaces};