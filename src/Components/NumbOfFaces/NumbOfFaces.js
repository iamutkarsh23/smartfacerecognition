import React from 'react';

const NumbOfFaces = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, number of faces in the picture are `}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default NumbOfFaces;