import React, { useState, useContext } from 'react'
import sensitiveQuestions from "../../Data/sensitiveQuestions.json";

export const ClueContext = React.createContext()


const ClueFrame = ({ children }) => {
    const [clueNumber, setClueNumber] = useState(0)
    const [isUsed, setIsUsed] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)

    const clueWasUsed = () => {
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
    }
    return (
        <ClueContext.Provider value={contextData}>
            {children}
        </ClueContext.Provider>
    )
}

export default ClueFrame
