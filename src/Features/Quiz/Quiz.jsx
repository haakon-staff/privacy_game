import React, { useState, useContext } from "react";
import Hints from "./Hints";
import "./styled.css"
import Clue from "./Clue"
import { ClueContext } from "./ClueFrame";
import { QuizContext } from "./QuizFrame";


const Quiz = (props) => {

    const quizContext = useContext(QuizContext)
    const clueContext = useContext(ClueContext)

    console.log(quizContext.currentInputValue)
    return (
        <div>
            <h1>The game</h1>
            <Hints />
            <p className="Question-text">{quizContext.current.question}</p>
            <input type="text" onChange={(event) => quizContext.setCurrentInputValue(event.target.value)} />
            
            <button onClick={() => { quizContext.questionWasAnswered(); clueContext.incrementIfUsed() }}>
                Next question!
            </button>
            <br />
            <Clue />
        </div>
    )
}

export default Quiz;