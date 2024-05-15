import { QUESTIONS } from 'Constants';
import { checkQuestionResponse, createQuestionsMap } from 'Utils';
import { useMemo, useState } from 'react';
import Question from 'shared/Question';
import { Button, PageContainer } from 'shared/Styled';

const Home = () => {
  const [responses, setResponses] = useState(new Map<string, string>());
  const [score, setScore] = useState(0);
  const questionsMap =  useMemo(() => createQuestionsMap(QUESTIONS), []);
  const questions = useMemo(() => Array.from(questionsMap.values()), [questionsMap]);

  const onResponse = (questionKey: string, answer: string) => {
    if (responses.get(questionKey) === answer) {
      return;
    }
    setResponses(new Map(responses.set(questionKey, answer)));
    const question = questionsMap.get(questionKey);
    const correct = checkQuestionResponse(question, answer);
    let newScore = score;
    if (correct) {
      newScore += 1;
    } else if (newScore > 0) {
      newScore -= 1;
    }
    setScore(() => newScore);
  }

  return (
  <PageContainer>
    <h1>Practice Test</h1>
    <h2>Score: {score} / {questions.length}</h2>
    {questions.map((question, i) =>
    <Question index={i} key={i} question={question} onChange={onResponse} selectedValue={responses.get(question.key)} />
    )}
  </PageContainer>
  );
};
export default Home;
