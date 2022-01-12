import React, { useState, useContext } from 'react'
import { ClueContext } from './ClueFrame';

const Clue = () => {
    const [isOpen, setIsOpen] = useState(false);
    const click = () => {
        setIsOpen(true);
    }

    return (
        <div className="Clue">
            <button className="Clue-button" onClick={() => click()} >Clue!</button>
            {isOpen && <Popup closeFn={() => setIsOpen(false)} />}
        </div>
    )
}

export default Clue



const Popup = ({ closeFn }) => {
    const [accepted, setAccepted] = useState(false)
    const context = useContext(ClueContext)

    const accept = () => {
        setAccepted(true)
        context.clueWasUsed()
    }


    console.log("***1", context)
    return (
        <div className="popup-box">
            <div className="box">
                {context.sensitiveQuestion.question}
                <br />
                {/* <MyInput sensitiveQuestion={context.sensitiveQuestion} /> */}
                {
                    context.sensitiveQuestion.inputType === "text"
                        ? <>
                            <input type="text" />
                        </>
                        : <>
                            <label>
                                <input type="radio" value="yes" name="yesno" text="yes" />
                                yes
                            </label>
                            <br />
                            <label>
                                <input type="radio" value="no" name="yesno" text="no" />
                                no
                            </label>
                            {/* TODO: sende svaret til rapport --> send svaret til context, implementer logikken for dette for input felt og radio buttons */}
                        </>
                }
                <br />
                {
                    !accepted
                        ? <>
                            <button onClick={() => accept()}>
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

