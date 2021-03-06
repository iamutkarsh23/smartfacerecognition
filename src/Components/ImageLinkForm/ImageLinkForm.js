import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange , onDetectSubmit}) =>{
    return(
        <div>
            <p className='white f3'>
                {'This Magic Brain will detect faces in your picture. Here is a sample picture link: https://tinyurl.com/ychh7w66'}<br />{' Try it out ;) '}
            </p>
            <div className='center'>
                <div className= 'center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-30 f4 link ph3 pv2 dib white bg-light-purple grow'
                    onClick={onDetectSubmit}>
                    Detect
                    </button>
                </div>
            </div>
        </div>

    );
}

export default ImageLinkForm;