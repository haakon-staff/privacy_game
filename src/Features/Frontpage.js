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
                            <h1>Information seeker</h1>
                            <p className="Sidemargin"> <b>Your objetive: </b> Answer all the questions before you run out of time <br /><br />

                                This is a test to measure how good you are at finding key information within a short time period. On the next page you will see the following:
                                <br/>
                                <b>An input field:</b> Here you can insert your answer to the question, by clicking "next" your answer is locked, you can <b>not</b> go back once you have clicked "next", so be confident in your answer!
                                <br/>
                                <b>Company information:</b> Here there are 4 links, with information that contain the answers to the questions. However the links also contain alot of information that is not relevant to the answer. This is the tricky part!
                                <br/>
                                <b>Clue!</b> Are you stuck? Or do you wish to find the answer quick? Use the clue button to get help. You can only use it once on each question, but you can use it on all questions. Some terms may apply when using "Clue!", but there are no punishments.

                            </p>
                            <b className="Sidemargin"> A reward will be given to the participant with the most correct answer within the shortest time! Be quick and precise. </b>
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
