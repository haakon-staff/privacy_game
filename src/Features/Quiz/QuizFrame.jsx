import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import questions from "../../Data/quizQuestions.json";

export const QuizContext = React.createContext()


const QuizFrame = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const [answers, setAnswers] = useState([]);
    const navigate = useNavigate();

    const questionWasAnswered = () => {
        setAnswers([...answers, currentInputValue])
        if (questions.length - 1 === currentQuestionIndex) {
            navigate('/final');
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const contextData = {
        current: questions[currentQuestionIndex],
        questionWasAnswered,
        currentInputValue,
        setCurrentInputValue,
        answers,
        setAnswers,
    }
    return (
        <QuizContext.Provider value={contextData}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizFrame
