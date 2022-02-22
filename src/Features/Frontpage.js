import Popup from '../Components/Popup/Popup';
import React, { useState, useContext } from "react";
import Tos from '../Components/Tos';
import ManageTos from '../Components/ManageTos';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { QuizContext } from './Quiz/QuizFrame';
import useTimer from './Quiz/useTimer';


const Stage = {
    main: Symbol(),
    popup: Symbol(),
    manage: Symbol(),
}


const Frontpage = (props) => {
    const [stage, setStage] = useState(Stage.popup);
    const [timeTakenToAnwserTos, setTimeTakenToAnwserTos] = useState(undefined);
    const tosTimer = useTimer({ autoStart: true });
    const navigate = useNavigate();

    const quizContext = useContext(QuizContext)


    const closePopup = () => {
        setTimeTakenToAnwserTos(tosTimer.getElapsedTime())
        setStage(Stage.main)
    }

    const startQuiz = (formProps) => {
        const tosData = {
            ...formProps.values,
            timeTakenToAnwserTos
        }

        props.sendTos(tosData)
        quizContext.startTimer()
        navigate('/quiz');
    }

    return (
        <div>
            <Formik
                initialValues={{ name: true, gps: true, browserH: true, searchH: true, political: true, preference: true }}
                enableReinitialize
                onSubmit={() => { }}
            >
                {(formProps) => {
                    return (
                        <>
                            <h1>Privacy game</h1>
                            <p className="Sidemargin">Your objetive is try to solve as many tasks as possible within the timelimit. <br /><br />
                                This is a test to see how good you are at finding important information within a short time period. You will have 6 mintues to answer 6 questions about a company. When you click on the "Start" button the timer will start and the test has started.
                                There are 3 links "Company information", "Structure", and "Trivia". All the neseccary information will be found within those 3 links, however they contain information that is not relevant to the question, so your objetive is to find the correct information among the irrelevant.
                                <b> Note</b> During the quiz, you lock in your answers by writing in the input box and clicking the "next" button, once you do this, you can <b>not</b> go back, so make sure you are confident in your answer before you click next.
                                Lastly, if you are stuck, there is a <b>"Clue"</b>button, this you can use on any of the questions, it can be used once on each question and you can gain hints and additional benefitsgi from using this function.
                            </p>
                            <b className="Sidemargin"> A reward will be given to the particpant with the most correct answer within the shortest time, Be quick and precise.</b>
                            <br />
                            <br />
                            <div className="button-container">
                                <button className="primary-button" onClick={() => startQuiz(formProps)}>
                                    Start
                                </button>
                            </div>
                            {stage === Stage.popup && (
                                <Popup content={(<Tos />)} optButtonText="manage" funcButtonOpt={() => setStage(Stage.manage)} mainButtonText="accept" funcButtonMain={() => closePopup()} />
                            )}
                            {stage === Stage.manage && (
                                <Popup content={(<ManageTos formProps={formProps} />)} mainButtonText="Save" funcButtonMain={() => closePopup()} />
                            )}
                        </>
                    )
                }}

            </Formik>
        </div>
    )
}

export default Frontpage
