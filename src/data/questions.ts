export type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which language runs in a web browser?",
    options: ["Python", "C++", "JavaScript", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
];
