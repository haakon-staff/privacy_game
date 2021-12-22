import React from 'react'
import hints from "../../Data/hints.json";

const Hints = () => {
    return (
        <div className="Hints">
            <h2>Hints</h2>
            {
                hints.map((hint, ix)=> <div key={ix}><a href={"hint/" + hint.linkname} target="hint">{hint.linkname}</a></div>) 
            }
        </div>
    )
}

export default Hints
