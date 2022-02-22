import React from "react";

const Popup = ({ content, optButtonText, mainButtonText, funcButtonOpt, funcButtonMain }) => {
    return (
        <div className="popup-background">
            <div className="popup-box">
                <h2>Cookie settings</h2>
                <p>{content}</p>
                <div className="button-container">
                    {optButtonText && (
                        <button className="secondary-button" onClick={funcButtonOpt}>
                            {optButtonText}
                        </button>
                    )}
                    <button className="primary-button" onClick={funcButtonMain}>
                        {mainButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Popup;