import './App.css';
import Frontpage from './Features/Frontpage';
import Quiz from "./Features/Quiz/Quiz"
import React, { useState } from "react";
import Outdex from './Features/Outdex/Outdex';
import Hint from './Features/Quiz/Hint';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ClueFrame from './Features/Quiz/ClueFrame';
import QuizFrame, { QuizContext } from './Features/Quiz/QuizFrame';

function App() {

  const [tos, setTos] = useState({});

  return (
    <Router>
      <QuizFrame>
        <ClueFrame>
          <div className="App">
            <Routes>
              <Route path="/" element={<Frontpage sendTos={setTos} />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/final" element={<Outdex tos={tos} />} />
              <Route path="/hint/:linkname" element={<Hint />} />
            </Routes>
          </div>
        </ClueFrame>
      </QuizFrame>
    </Router>
  );
}

export default App;
