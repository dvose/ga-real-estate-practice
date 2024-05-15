import { Question } from "Constants";

export const createQuestionsMap = (questions: Question[]) => {
  const shuffleArray = (array: any[]) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
  const shuffled = shuffleArray(questions);
  const map = new Map<string, Question>();
  shuffled.forEach(q => map.set(q.key, q));
  return map;
};

export const checkQuestionResponse = (question: Question | undefined, response: string) => {
  if (!question) {
    return null;
  }
  return response === question.correctAnswer
}