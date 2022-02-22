import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import questions from "../../Data/quizQuestions.json";
import useTimer from './useTimer';

export const QuizContext = React.createContext()


const QuizFrame = ({ children }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentInputValue, setCurrentInputValue] = useState("");
    const [answers, setAnswers] = useState([]);
    
    const { startTimer, getElapsedTime } = useTimer()
    const navigate = useNavigate();

    const questionWasAnswered = () => {
        const questionAnswersParamaters = {
            questions: questions[currentQuestionIndex],
            answer: currentInputValue,
            elapsedTime: getElapsedTime()
        }
        setAnswers([...answers, questionAnswersParamaters])
        setCurrentInputValue("")

        if (questions.length - 1 === currentQuestionIndex) {
            navigate('/final');
        }
        else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            //nullstill timer for hvert spm
            startTimer()
        }
    }

    const contextData = {
        current: questions[currentQuestionIndex],
        questionWasAnswered,
        startTimer,
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
