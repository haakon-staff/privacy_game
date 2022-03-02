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
        <>
            <div className="quiz-page">
                <h1>The game</h1>
                <Hints />
                <p className="question-text">{quizContext.current.question}</p>
                <div>
                    <input type="text" onChange={(event) => quizContext.setCurrentInputValue(event.target.value)} value={quizContext.currentInputValue} />

                    <button className="secondary-button" onClick={() => { quizContext.questionWasAnswered(); clueContext.incrementIfUsed() }}>
                        Next question!
                    </button>
                </div>
                <br />
                <Clue />
                <br />

            </div>

            <div>
                <Countdown secondsToCountdown={600} />
            </div>
        </>
    )
}

export default Quiz;
