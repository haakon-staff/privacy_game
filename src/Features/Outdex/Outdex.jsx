import React, { useContext } from 'react';
import { QuizContext } from '../Quiz/QuizFrame';
import { ClueContext } from '../Quiz/ClueFrame';
import writeToFile from './utils';


const Outdex = (props) => {
    const quizContext = useContext(QuizContext)
    const clueContext = useContext(ClueContext)
    return (
        <div>
            <h1>FINAL PAGE</h1>
            <button onClick={() => writeToFile(props.tos, quizContext.answers, clueContext.clueAnswers)}>
                Download report
            </button>
        </div>
    )
}

export default Outdex
