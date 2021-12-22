import React from "react";
import "./style.css"

const Popup = ({ content, optButtonText, mainButtonText, funcButtonOpt, funcButtonMain }) => {
    return (
        <div className="popup-box">
            <div className="box">
                {content}
                <div className="buttonContainer">
                    {optButtonText && (
                        <button onClick={funcButtonOpt}>
                            {optButtonText}
                        </button>
                    )}
                    <button style={{ backgroundColor: "darkGreen"}} onClick={funcButtonMain}>
                        {mainButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;