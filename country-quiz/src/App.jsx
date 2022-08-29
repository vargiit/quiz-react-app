import { useState } from "react";
import "./index.css";
import Quiz from "./components/Quiz";
import { Result } from "./components/Result";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";

export default function App() {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(() => 0);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`quiz-:id`}
          element={
            <Quiz
              score={score}
              setScore={setScore}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          }
        />
        <Route
          path="quiz/result"
          element={<Result score={score} setScore={setScore} />}
        ></Route>
      </Routes>
    </div>
  );
}
