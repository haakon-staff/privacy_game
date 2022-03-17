import React, { useState, useContext } from 'react'
import { ClueContext } from './ClueFrame';
import { QuizContext } from './QuizFrame';

const Clue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(true);
    }

    return (
        <div className="clue">
            <button className="bait-button" onClick={() => click()} >Clue!</button>
            {isOpen && <Popup closeFn={() => setIsOpen(false)} />}
        </div>
    )
}

export default Clue



const Popup = ({ closeFn }) => {
    const clueContext = useContext(ClueContext)
    const quizContext = useContext(QuizContext)

    const accept = () => {
        if (clueContext.sensitiveQuestion.inputType === "text" && clueContext.currentClueInputValue === "") {
            return;
        }

        clueContext.clueWasUsed(clueContext.sensitiveQuestion.inputType === "text")
        clueContext.clueWasAccepted()
    }

    return (
        <div className="popup-background">
            <div className="popup-box">
                {
                    !clueContext.isUsed
                        ? <>
                            {clueContext.sensitiveQuestion.question}
                            <br />
                            {
                                clueContext.sensitiveQuestion.inputType === "text"
                                && <>
                                    <input type="text" value={clueContext.currentClueInputValue} onChange={e => clueContext.setCurrentClueInputValue(e.target.value)} />
                                </>
                            }
                            <br />
                            <button onClick={() => accept()}>
                                {clueContext.sensitiveQuestion.compromisedAnswer}
                            </button>
                            <button onClick={() => closeFn()}>
                                {clueContext.sensitiveQuestion.nonCompromisedAnswer}
                            </button>
                        </>
                        : <>
                            Here is your clue!
                            <br />
                            {quizContext.current.clue}
                            <br />
                            <button className="primary-button" onClick={() => closeFn()}>
                                Close
                            </button>
                        </>
                }
            </div>
        </div>
    )
}