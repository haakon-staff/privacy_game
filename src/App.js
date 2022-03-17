import Frontpage from './Features/Frontpage';
import Quiz from "./Features/Quiz/Quiz"
import React, { useState } from "react";
import Outdex from './Features/Outdex/Outdex';
import Hint from './Features/Quiz/Hint';

import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ClueFrame from './Features/Quiz/ClueFrame';
import QuizFrame from './Features/Quiz/QuizFrame';

function App() {

  const [tos, setTos] = useState({});

  return (
    <div className="main-content">
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
    </div>
  );
}

export default App;
