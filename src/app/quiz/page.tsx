"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (answer: string) => {
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setFinished(false);
  };

  
  if (finished) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-700">
        <h1 className="text-2xl font-bold mb-4">Quiz Finished 🎉</h1>
        <p className="mb-6">
          Your Score: {score} / {questions.length}
        </p>
        <button
          onClick={restartQuiz}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Restart Quiz
        </button>
      </main>
    );
  }


  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-300 p-4">
      <div className="bg-gray-700 shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">
          Question {currentQuestion + 1} of {questions.length}
        </h2>
        <p className="mb-6">{questions[currentQuestion].question}</p>

        <div className="flex flex-col gap-2">
          {questions[currentQuestion].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              className="px-4 py-2 border rounded hover:bg-zinc-500 text-left"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
