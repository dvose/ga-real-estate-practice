export type Question = {
  key: string,
  body: string,
  answers: string[],
  correctAnswer: string
};

export const QUESTIONS: Question[] = [
  {
    key: '1',
    body: 'What is the name of the car?',
    answers: ['Sam', 'Max', 'Gene'],
    correctAnswer: 'Sam'
  },
  {
    key: '2',
    body: 'What is the name of the boat?',
    answers: ['John', 'Donny', 'Man'],
    correctAnswer: 'Donny'
  }
];