import { QUESTIONS } from 'Constants';
import { checkQuestionResponse, createQuestionsMap } from 'Utils';
import { useMemo, useState } from 'react';
import Question from 'shared/Question';
import { Button, PageContainer } from 'shared/Styled';

const Home = () => {
  const [onlyMath, setOnlyMath] = useState(false);
  const [unit, setUnit] = useState(0);
  const units = [0,1,2,3];
  const [responses, setResponses] = useState(new Map<string, string>());
  const [score, setScore] = useState(0);
  const questionsMap =  useMemo(() => createQuestionsMap(QUESTIONS), []);
  const questions = useMemo(() => Array.from(questionsMap.values()).filter(q => {
    let match = true;
    if (unit !== 0) {
      match = q.unit === unit
    }
    if (onlyMath) {
      match = match && !!q.math;
    }
    return match;
  }), [questionsMap, unit, onlyMath]);

  const onToggleUnit = (u: number) => {
    if (unit === u) {
      return;
    }
    setUnit(u);
    setScore(0);
    setResponses(new Map<string, string>());
  }

  const onResponse = (questionKey: string, answer: string) => {
    if (responses.get(questionKey) === answer) {
      return;
    }
    const response = responses.get(questionKey);
    setResponses(new Map(responses.set(questionKey, answer)));
    const question = questionsMap.get(questionKey);
    const correct = checkQuestionResponse(question, answer);
    let oldVal: boolean | undefined | null;
    if (response) {
      oldVal = checkQuestionResponse(question, response);
    }
    let newScore = score;
    if (correct) {
      newScore += 1;
    } else if (oldVal && newScore > 0) {
      newScore -= 1;
    }
    setScore(() => newScore);
  }

  return (
  <PageContainer>
    <h1>Practice Test</h1>
    <span style={{marginBottom: 6, marginTop: 6}}>Units: </span>
    {units.map((u, i) => <Button style={{marginRight: 6}} key={i} onClick={() => onToggleUnit(u)}>{u === 0 ? 'All' : u}</Button>)}
    <br/>
    <Button style={{marginTop: 12}} onClick={() => setOnlyMath(!onlyMath)}>{onlyMath ? 'Show All Questions' : 'Only Math Questions'}</Button>
    <h2>{unit !== 0 ? `Unit ${unit}: ` : 'All Questions: '}Score: {score} / {questions.length} <Button style={{position: 'relative', top: -3, backgroundColor: 'red'}} onClick={() => { setResponses(new Map<string, string>()); setScore(0);}}>Reset Answers</Button>
</h2>
    {questions.filter(q => onlyMath ? q.math : true).map((question, i) =>
    <Question index={i} key={i} question={question} onChange={onResponse} selectedValue={responses.get(question.key)} />
    )}
  </PageContainer>
  );
};
export default Home;
