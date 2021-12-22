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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sapien lorem, pretium id mi quis, volutpat lacinia lectus. In eget ipsum nunc. Pellentesque tellus lorem, porttitor id massa sit amet, hendrerit suscipit elit. Sed vulputate eleifend augue sed auctor. Sed tempus nisi et pellentesque lobortis. Nam id pellentesque neque. Phasellus commodo nibh nec neque fringilla tristique et at nisi. Fusce pharetra orci at molestie scelerisque. Nam luctus felis in neque accumsan, vitae scelerisque elit blandit. Donec egestas mattis mauris ac placerat. Sed congue lectus nisl, et vehicula est tempus eu. Duis iaculis, ligula quis dapibus tincidunt, sapien ex convallis libero, sed facilisis augue augue et diam.
                                Ut finibus consectetur odio, sit amet facilisis leo mollis et. Nulla id neque blandit, commodo dolor ultrices, porta nunc. Curabitur at magna lectus. Integer mauris magna, consectetur sed ex tincidunt, sollicitudin finibus nulla. Sed viverra enim sed nunc hendrerit, sit amet ultricies ligula dapibus. Sed interdum sagittis sem sagittis aliquet. Quisque a nibh ut arcu gravida iaculis in nec lorem. Phasellus in tortor leo. Sed sed finibus risus. In condimentum gravida eros. Pellentesque ex enim, lobortis a massa sed, cursus eleifend nisi.
                            </p>
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
