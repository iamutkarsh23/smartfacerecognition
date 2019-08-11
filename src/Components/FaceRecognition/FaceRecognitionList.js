import React from 'react';
import FaceRecognition from './FaceRecognition';

const FaceRecognitionList = ({box, imageURL}) =>{

    const thisBox = box.map((singlebox,i) => {
        return  <FaceRecognition  key= {i} singlebox = {singlebox}/>
    })

    return(
        <div className = "center ma">
            <div className="absolute mt2">
                <img id="inputImage" src = {imageURL} alt="" width='500px' height='auto'/>
                {thisBox}
            </div>
        </div>
            
    );
}

export default FaceRecognitionList;