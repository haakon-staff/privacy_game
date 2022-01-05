import Popup from '../Components/Popup/Popup';
import React, { useState } from "react";
import { Stage } from '../utils.ts';
import Tos from '../Components/Tos';
import ManageTos from '../Components/ManageTos';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const Frontpage = ( props ) => {
    const [stage, setStage] = useState(Stage.popup);
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/quiz');
    }

 
    return (
        <div>
            <Formik
                initialValues={{ name: true, gps: true, searchHistory: true }}
                enableReinitialize
                onSubmit={() => { }}
            >
                {(formProps) => {
                    return (
                        <>
                            <h1>Privacy game</h1>
                            <p className="Sidemargin">Your objetive is try to solve as many tasks as possible within the timelimit. <br /><br />
                                This is a test to see how good you are at finding important information within a short time period. You will have 6 mintues to answer 6 questions about a company. When you click on the "Start" button the timer will start and the test has started.
                                There are 3 links "Company information", "Structure", "Trivia" all the neseccary information will be found within those 3 links, however they contain information that is not relevant to the question, so your objetive is to find the correct information among the irrelevant.
                                Lastly, if you are stuck, there is a <b>"Clue"</b>button, this you can use on any of the questions, howewer to get help, some information must be given back.
                            </p>
                            <b>A reward will be given to the particpant with the most corrct answer within the shortest time, Be quick and precise.</b>
                            <br/>
                            <br/>
                            <button className="buttonLayout" onClick={() => {
                                props.sendTos(formProps.values)
                                routeChange();
                            }}>
                                Start
                            </button>
                            {stage === Stage.popup && (
                                <Popup content={(<Tos />)} optButtonText="manage" funcButtonOpt={() => setStage(Stage.manage)} mainButtonText="accept" funcButtonMain={() => setStage(Stage.main)} />
                            )}
                            {stage === Stage.manage && (
                                <Popup content={(<ManageTos formProps={formProps} />)} mainButtonText="Save" funcButtonMain={() => setStage(Stage.main)} />
                            )}
                        </>
                    )
                }}

            </Formik>
        </div>
    )
}

export default Frontpage
