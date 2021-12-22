import React from 'react'
import hints from "../../Data/hints.json"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  
const Hint = () => {

    const { linkname } = useParams();
    const {content} = hints.find(hint => hint.linkname === linkname);

    return (
        <div>
            link is {linkname} 
            <br/>
            content {content}
        </div>
    )
}

export default Hint
