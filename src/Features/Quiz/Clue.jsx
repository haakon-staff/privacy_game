import React, { useState } from 'react'
import senstiveQuestions from "../../Data/sensetiveQuestions.json"

const Clue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(true);
    }

    return (
        <div className="Clue">
            <button onClick={() => click()} >Clue!</button>
            {isOpen && <Popup closeFn={() => setIsOpen(false)} />}
        </div>
    )
}

export default Clue



const Popup = ({ closeFn }) => {
    const [accepted, setAccepted] = useState(false)

    return (
        <div className="popup-box">
            <div className="box">
                In the box
                <br />
                {
                    !accepted
                        ? <>
                            <button onClick={() => setAccepted(true)}>
                                Accept
                            </button>
                            <button onClick={() => closeFn()}>
                                Deny
                            </button>
                        </>
                        : <>
                            this is the acccepted state.
                            <button onClick={() => closeFn()}>
                                Close
                            </button>
                        </>
                }
            </div>
        </div>
    )
}

