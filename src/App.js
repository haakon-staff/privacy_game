import './App.css';
import Frontpage from './Features/Frontpage';
import Quiz from "./Features/Quiz"
import React, { useState } from "react";
import Outdex from './Features/Outdex/Index';
import Hint from './Features/Quiz/Hint';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ClueFrame from './Features/Quiz/ClueFrame';

function App() {

  const [answers, setAnswers] = useState([]);
  const [tos, setTos] = useState({});

  console.log(answers)

  return (
    <ClueFrame>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Frontpage sendTos={setTos} />} />
            <Route path="/quiz" element={<Quiz setAnswers={setAnswers} answers={answers} />} />
            <Route path="/final" element={<Outdex tos={tos} answers={answers} />} />
            <Route path="/hint/:linkname" element={<Hint />} />
          </Routes>
        </div>
      </Router>
    </ClueFrame>
  );
}

export default App;
