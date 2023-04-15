import React, { useState } from "react";
import "./quiz.css";
import { Link } from 'react-router-dom'
import { pid } from "./signup";



function Quiz() {
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  
  const questions = [
    {
      text: " I have been able to laugh and see the funny side of things.",
      options: [
        { id: 0, text: " Not at all ", isCorrect: 3 },
        { id: 1, text: " Definitely not so much now ", isCorrect: 2 },
        { id: 2, text: " Not quite so much now ", isCorrect: 1 },
        { id: 3, text: " As much as I always could ", isCorrect: 0 },
      ],
    },
    {
      text: " I am able to look forward with enjoyment to things.",
      options: [
        { id: 0, text: " Hardly at all ", isCorrect: 3 },
        { id: 1, text: " Definitely less than I used to ", isCorrect: 2 },
        { id: 2, text: " Yes, most of the time ", isCorrect: 1 },
        { id: 3, text: " As much as I ever did ", isCorrect: 0 },
      ],
    },
    {
      text: " I have blamed myself unnecessarily when things went wrong.",
      options: [
        { id: 0, text: " Yes, most of the time ", isCorrect: 3 },
        { id: 1, text: " Yes, some of the time ", isCorrect: 2 },
        { id: 2, text: " Not very often ", isCorrect: 1 },
        { id: 3, text: " No, never ", isCorrect: 0 },
      ],
    },
    {
      text: " I have been anxious or worried for no good reason. ",
      options: [
        { id: 0, text: " No not at all ", isCorrect: 3 },
        { id: 1, text: " Hardly ever ", isCorrect: 2 },
        { id: 2, text: " Yes, sometimes ", isCorrect: 1 },
        { id: 3, text: " Yes, very often ", isCorrect: 0 },
      ],
    },
    {
      text: " I have felt scared or panicky for no very good reason.",
      options: [
        { id: 0, text: " No, not at all ", isCorrect: 0 },
        { id: 1, text: " No, not much ", isCorrect: 1 },
        { id: 2, text: " Yes, sometimes ", isCorrect: 2 },
        { id: 3, text: " Yes, quite a lot ", isCorrect: 3 },
      ],
    },
    {
      text: " Things have been getting on top of me.",
      options: [
        { id: 0, text: " No, I have been coping as well as ever ", isCorrect: 0 },
        { id: 1, text: " No, most of the time I have coped quite well ", isCorrect: 1 },

        { id: 2, text: " Yes, sometimes I haven't been coping as well as usual ", isCorrect: 2 },
        { id: 3, text: " Yes, most of the time I haven't been able to cope at all ", isCorrect: 3 },
      ],
    },
    {
      text: " I have been so unhappy that I have had difficulty sleeping.",
      options: [
        { id: 0, text: " Yes, most of the time ", isCorrect: 3 },
        { id: 1, text: " Yes, sometimes ", isCorrect: 2 },
        { id: 2, text: " Not very often ", isCorrect: 1 },
        { id: 3, text: " No, not at all ", isCorrect: 0 },
      ],
    },
    {
      text: " I have felt sad or miserable. ",
      options: [
        { id: 0, text: " Yes, most of the time ", isCorrect: 3 },
        { id: 1, text: " Yes, quite often ", isCorrect: 2 },
        { id: 2, text: " Not very often ", isCorrect: 1 },
        { id: 3, text: " No, not at all ", isCorrect: 0 },
      ],
    },
    {
      text: " I have been so unhappy that I have been crying. ",
      options: [
        { id: 0, text: " Yes, most of the time ", isCorrect: 3 },
        { id: 1, text: " Yes, quite often ", isCorrect: 2 },
        { id: 2, text: " Only occasionally ", isCorrect: 1 },
        { id: 3, text: " No, never ", isCorrect: 0 },
      ],
    },
    {
      text: " The thought of harming myself has occurred to me. ",
      options: [
        { id: 0, text: " Yes, quite often ", isCorrect: 3 },
        { id: 1, text: " Sometimes ", isCorrect: 2 },
        { id: 2, text: " Hardly ever ", isCorrect: 1 },
        { id: 3, text: " Never ", isCorrect: 0 },
      ],
    },
  ];
  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (true) {
      setScore(score + isCorrect);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };
  function startQuiz() {
    var x = document.getElementById("myDIV1");
    var y = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    if(y.style.display==="block"){
      y.style.display = "none";
    } else {
      y.style.display = "block";
    }

  }

  return (
    <div>
      <div class="quiz"id="myDIV1">
      <h1 className='title text-dark'>Daily PPD Screening.</h1>
      <h2 className='title text-dark'>Please read the directions below before attempting the test.</h2>
      <ol>
        <li>This quiz is based on standard EPDS(Edinburgh Postnatal Depression Scale) Scale of measuring Post Partum Depression and may be used within 8 weeks postpartum and it also can be applied for depression screening during pregnancy.</li>
        <li> Please read the questions and choose the response that comes closest to how you felt during the previous seven days</li>
        <li>There is no privacy intrusion from our behalf. Hence, please answer the questions honestly for proper assessment.</li>
        <li>This asessment is only meant for informative and advisory reasons. It can by no means replace therapy and diagnosis by certified therapists.</li>
        <li>The result and PPD scale will be declared at the end of the quiz.</li>
      </ol>

      <div className='start'>
        <button className='btn' to={'quiz'} onClick={() => startQuiz()}>Start Quiz</button>
      </div>
    </div>

    <div id="myDIV2" className="App">
      {/* 1. Header  */}
      <h1>Assessment Test</h1>
      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <ul>
            <li>Your Assessment Score has been shared with our authorised Doctor of Obstetrics and Gynaecology.</li>
            <li>Personalized Lifestyle/Diet Track would be accessible within 24 hours.</li>
          </ul>
          <br></br>
          <br></br>
          <h2 className="heading3">Any particular symptoms</h2>
          <input type="text" id="symptoms" default Value=""></input>
          <br></br>
          <br></br>
          <br></br>
          <h2 className="heading3">BMI</h2>
          <input type="number" id="BMI"default Value="" ></input>
          <br></br>
          <br></br>
          <br></br>
          <button onClick={() => restartGame()}>Restart Assessment</button>
            <button onClick={() => startQuiz()}>Home Page</button>
        </div>
      ):(
        /* 5. Question Card  */
        <div className="question-card q">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      </div>
    </div>
  );
 

}

export default Quiz;

