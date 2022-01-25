import React, { useState, useContext } from 'react'
import sensitiveQuestions from "../../Data/sensitiveQuestions.json";

export const ClueContext = React.createContext()


const ClueFrame = ({ children }) => {
    const [clueNumber, setClueNumber] = useState(0)
    const [isUsed, setIsUsed] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)
    const [clueAnswers, setClueAnswers] = useState([]);
    const [currentClueInputValue, setCurrentClueInputValue] = useState("");

    const clueWasUsed = (isText) => {
        const clueAnswersParamters = {
            sensitiveQuestion: sensitiveQuestions[clueNumber].question
        }

        setClueAnswers([
            ...clueAnswers,
            clueAnswersParamters
        ])
        setIsUsed(true)
    }

    const clueWasAccepted = () => {
        setIsAccepted(true)
    }

    const incrementIfUsed = () => {
        if (isUsed) {
            setClueNumber(clueNumber + 1)
        }
        setIsUsed(false)
    }

    const contextData = {
        clueNumber,
        clueWasUsed,
        clueWasAccepted,
        incrementIfUsed,
        sensitiveQuestion: sensitiveQuestions[clueNumber],
        isUsed,
        isAccepted,
        clueAnswers,
        setClueAnswers,
        currentClueInputValue,
        setCurrentClueInputValue,
    }
    return (
        <ClueContext.Provider value={contextData}>
            {children}
        </ClueContext.Provider>
    )
}

export default ClueFrame
