import React, { useContext } from "react";
import Hints from "./Hints";
import Clue from "./Clue"
import { ClueContext } from "./ClueFrame";
import { QuizContext } from "./QuizFrame";
import Countdown from "./Countdown";


const Quiz = (props) => {

    const quizContext = useContext(QuizContext)
    const clueContext = useContext(ClueContext)

    return (
        <div>
            <h1>The game</h1>
            <Hints />
            <p className="Question-text">{quizContext.current.question}</p>
            <input type="text" onChange={(event) => quizContext.setCurrentInputValue(event.target.value)} value={quizContext.currentInputValue}/>

            <button onClick={() => { quizContext.questionWasAnswered(); clueContext.incrementIfUsed() }}>
                Next question!
            </button>
            <br />
            <Clue />
            <br />
            <div>
                <Countdown secondsToCountdown={600} />
            </div>
        </div>
    )
}

export default Quiz;
