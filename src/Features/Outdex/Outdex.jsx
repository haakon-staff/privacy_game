import React, { useContext } from 'react';
import { QuizContext } from '../Quiz/QuizFrame';
import writeToFile from './utils';


const Outdex = (props) => {
    const quizContext = useContext(QuizContext)
    return (
        <div>
            <h1>FINAL PAGE</h1>
            <button onClick={() => writeToFile(props.tos, quizContext.answers)}>
                Download report
            </button>
        </div>
    )
}

export default Outdex
