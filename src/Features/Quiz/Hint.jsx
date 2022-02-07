import React from 'react'
import hints from "../../Data/hints.json"
import { useParams } from "react-router-dom";


const Hint = () => {

    const { linkname } = useParams();
    const { content } = hints.find(hint => hint.linkname === linkname);

    return (
        <div className="Hint-Text">
            {linkname}
            <br />
            {content.map((e) => <p>{e}<br /></p>)}
        </div>
    )
}

export default Hint