import React from 'react'
import hints from "../../Data/hints.json";

const Hints = () => {
    return (
        <div className="hints">
            <h2>Company information</h2>
            {
                hints.map((hint, ix)=> <a key={ix} href={"#/hint/" + hint.linkname} target="hint">{hint.linkname}</a>) 
            }
        </div>
    )
}

export default Hints
