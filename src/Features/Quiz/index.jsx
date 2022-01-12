import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import questions from "../../Data/quizQuestions.json";
import Hints from "./Hints";
import "./styled.css"
import Clue from "./Clue"
import ClueFrame, { ClueContext } from "./ClueFrame";

const Quiz = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const context = useContext(ClueContext)
    const navigate = useNavigate();

    const questionWasAnswered = () => {
        {
            if (questions.length - 1 === currentQuestion) {
                props.setAnswers([...props.answers, currentInputValue])
                navigate('/final');
            }
            else {
                context.incrementIfUsed()
                setCurrentQuestion(currentQuestion + 1)
                props.setAnswers([...props.answers, currentInputValue])
            }
        }
    }

    

    console.log(currentInputValue)
    return (
            <div>
                <h1>The game</h1>
                <Hints />
                <p className="Question-text">{questions[currentQuestion].question}</p>
                <input onChange={(event) => setCurrentInputValue(event.target.value)}>

                </input>
                <button onClick={() => questionWasAnswered()}>
                    Next question!
                </button>
                <br />
                <Clue />
            </div>
    )
}

export default Quiz;
