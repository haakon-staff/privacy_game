import React from 'react';
import writeToFile from './utils';

const Outdex = ( props ) => {

    return (
        <div>
            <h1>FINAL PAGE</h1>
            <button onClick={() => writeToFile(props.tos,props.answers)}>
                Download report
            </button>
        </div>
    )
}

export default Outdex
