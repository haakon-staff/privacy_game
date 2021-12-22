import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import questions from "../../Data/quizQuestions.json";
import Hints from "./Hints";
import "./styled.css"
import Clue from "./Clue"

const Quiz = ( props ) => {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/final');
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentInputValue, setCurrentInputValue] = useState("");

    console.log(currentInputValue)
    return (
        <div>
            <h1>The game</h1>
            <Hints/>
            <p>{questions[currentQuestion].question}</p>
            <input onChange={(event) => setCurrentInputValue(event.target.value)}>

            </input>
            <button onClick={() => {
                if(questions.length-1 === currentQuestion){
                    props.setAnswers([...props.answers,currentInputValue])
                    routeChange();
                }
                else{
                    setCurrentQuestion(currentQuestion + 1)
                    props.setAnswers([...props.answers,currentInputValue])
                }
            }
            }>
                Next question!
            </button>
            <Clue/>
        </div>
    )
}

export default Quiz;
