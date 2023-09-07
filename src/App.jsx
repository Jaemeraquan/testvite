import { useState, useEffect } from "react";
import "./App.css";
import useSound from "use-sound";
import A1 from "./components/notes on treble clef/A1.jpg";
import B1 from "./components/notes on treble clef/B1.jpg";
import C2 from "./components/notes on treble clef/C2.jpg";
import D1 from "./components/notes on treble clef/D1.jpg";
import D2 from "./components/notes on treble clef/D2.jpg";
import E1 from "./components/notes on treble clef/E1.jpg";
import E2 from "./components/notes on treble clef/E2.jpg";
import F1 from "./components/notes on treble clef/F1.jpg";
import F2 from "./components/notes on treble clef/F2.jpg";
import G1 from "./components/notes on treble clef/G1.jpg";
import G2 from "./components/notes on treble clef/G2.jpg";
import C2audio from "./components/audio/pitch recognition audio-C2.wav";
import D1audio from "./components/audio/pitch recognition audio-D1.wav";
import D2audio from "./components/audio/pitch recognition audio-D2.wav";
import E1audio from "./components/audio/pitch recognition audio-E1.wav";
import E2audio from "./components/audio/pitch recognition audio-E2.wav";
import F1audio from "./components/audio/pitch recognition audio-F1.wav";
import F2audio from "./components/audio/pitch recognition audio-F2.wav";
import G1audio from "./components/audio/pitch recognition audio-G1.wav";
import G2audio from "./components/audio/pitch recognition audio-G2.wav";
import A1audio from "./components/audio/pitch recognition audio-A1.wav";
import B1audio from "./components/audio/pitch recognition audio-B1.wav";
import DFdyad from "./components/dyads/D-F Dyad.jpg";
import hintAC from "./components/notes on the fretboard/A-C Dyad.jpg";
import hintA1 from "./components/notes on the fretboard/A1.jpg";
import hintB1 from "./components/notes on the fretboard/B1.jpg";
import hintG1 from "./components/notes on the fretboard/G1.jpg";
import hintC2 from "./components/notes on the fretboard/C2.jpg";
import hintD2 from "./components/notes on the fretboard/D2.jpg";
import _ from "lodash";

export default function App() {
  const questions = [
    {
      questionImage: C2,
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: true },
        { answerText: "D", isCorrect: false },
        // { answerText: "E", isCorrect: false },
        // { answerText: "F", isCorrect: false },
        { answerText: "G", isCorrect: false },
      ],
      answeraudio: C2audio,
      answerHint: hintC2
    },
    // {
    //   questionImage: D1,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: true },
    //     { answerText: "E", isCorrect: false },
    //     { answerText: "F", isCorrect: false },
    //     { answerText: "G", isCorrect: false },
    //   ],
    //   answeraudio: D1audio,
    // },
    {
      questionImage: D2,
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: true },
        // { answerText: "E", isCorrect: false },
        // { answerText: "F", isCorrect: false },
        { answerText: "G", isCorrect: false },
      ],
      answeraudio: D2audio,
      answerHint: hintD2
    },
    // {
    //   questionImage: E1,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: false },
    //     { answerText: "E", isCorrect: true },
    //     { answerText: "F", isCorrect: false },
    //     { answerText: "G", isCorrect: false },
    //   ],
    //   answeraudio: E1audio,
    // },
    // {
    //   questionImage: E2,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: false },
    //     { answerText: "E", isCorrect: true },
    //     { answerText: "F", isCorrect: false },
    //     { answerText: "G", isCorrect: false },
    //   ],
    //   answeraudio: E2audio,
    // },
    // {
    //   questionImage: F1,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: false },
    //     { answerText: "E", isCorrect: false },
    //     { answerText: "F", isCorrect: true },
    //     { answerText: "G", isCorrect: false },
    //   ],
    //   answeraudio: F1audio,
    // },
    // {
    //   questionImage: F2,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: false },
    //     { answerText: "E", isCorrect: false },
    //     { answerText: "F", isCorrect: true },
    //     { answerText: "G", isCorrect: false },
    //   ],
    //   answeraudio: F2audio,
    // },
    {
      questionImage: G1,
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
        // { answerText: "E", isCorrect: false },
        // { answerText: "F", isCorrect: false },
        { answerText: "G", isCorrect: true },
      ],
      answeraudio: G1audio,
      answerHint: hintG1
    },
    // {
    //   questionImage: G2,
    //   answerOptions: [
    //     { answerText: "A", isCorrect: false },
    //     { answerText: "B", isCorrect: false },
    //     { answerText: "C", isCorrect: false },
    //     { answerText: "D", isCorrect: false },
    //     { answerText: "E", isCorrect: false },
    //     { answerText: "F", isCorrect: false },
    //     { answerText: "G", isCorrect: true },
    //   ],
    //   answeraudio: G2audio,
    // },
    {
      questionImage: A1,
      answerOptions: [
        { answerText: "A", isCorrect: true },
        { answerText: "B", isCorrect: false },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
        // { answerText: "E", isCorrect: false },
        // { answerText: "F", isCorrect: false },
        { answerText: "G", isCorrect: false },
      ],
      answeraudio: A1audio,
      answerHint: hintA1
    },
    {
      questionImage: B1,
      answerOptions: [
        { answerText: "A", isCorrect: false },
        { answerText: "B", isCorrect: true },
        { answerText: "C", isCorrect: false },
        { answerText: "D", isCorrect: false },
        // { answerText: "E", isCorrect: false },
        // { answerText: "F", isCorrect: false },
        { answerText: "G", isCorrect: false },
      ],
      answeraudio: B1audio,
      answerHint: hintB1
    },
  ];
  // const [questions, setQuestions] = useState([{answerText: " ", isCorrect: (false)}]);
  // const [score, setScore] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [response, setResponse] = useState(" ");
  const [play] = useSound(questions[currentQuestion].answeraudio);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setResponse("Good job!");
      document.getElementById("response").style.color = "green";
      play();
      setIsAnswered(true);
      // setScore + 1
    } else {
      setResponse("Try again!");
      document.getElementById("response").style.color = "red";
    }
  };
  function nextQuestion() {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setResponse(" ");
    } else {
      setShowScore(true);
    }
    setIsAnswered(false)
  }
  function previousQuestion() {
    const previousQuestion = currentQuestion - 1;
    if (previousQuestion >= 0) {
      setCurrentQuestion(previousQuestion);
      setResponse(" ");
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">Complete!</div>
      ) : (
        <>
          <div className="question-section">
            <h2 className="title">Shearer Note Recognition Demo</h2>

            <div class="dropdown" >
              <p>Hint?</p>
              <div class="dropdown-content">
                <img className="hint" src={questions[currentQuestion].answerHint} />
                <div class="desc"></div>
              </div>
            </div>
            <div>
              <h2 id="response"> {response} </h2>
            </div>
            <div>
              <img src={questions[currentQuestion].questionImage} />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="answer key"
                onClick={() => {
                  handleAnswerOptionClick(answerOption.isCorrect);
                }}
                style={{
                  cursor: isAnswered ? "not-allowed" : "pointer", // Disable cursor if answered
                }}
                disabled={isAnswered} // Disable the button if answered
              
                >{answerOption.answerText}
              </button>
            ))}
          </div>

          <div className="additional-section"></div>
          <div className="navigation">
            <div>
              <button
                className="previous-question"
                onClick={(e) => previousQuestion()}
              >
                Back
              </button>
              <button className="next-question" onClick={(e) => nextQuestion()}>
                Next
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
