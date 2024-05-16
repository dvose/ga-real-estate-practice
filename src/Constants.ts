export type Question = {
  key: string,
  body: string,
  answers: string[],
  correctAnswer: string,
  math?: boolean,
  unit?: number,
  image?: string
};