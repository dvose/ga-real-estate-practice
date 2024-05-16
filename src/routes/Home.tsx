import { QUESTIONS } from 'Constants';
import { checkQuestionResponse, createQuestionsMap } from 'Utils';
import { useMemo, useState } from 'react';
import Question from 'shared/Question';
import { Button, PageContainer } from 'shared/Styled';

const Home = () => {
  const [onlyMath, setOnlyMath] = useState(false);
  const [asTest, setAsTest] = useState(false);
  const [showTestResults, setShowTestResults] = useState(false);
  const [unit, setUnit] = useState(0);
  const units = [1,2,3,0];
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

  const onReset = () => {
    setScore(0);
    setShowTestResults(false);
    setResponses(new Map<string, string>());
  }

  const onToggleUnit = (u: number) => {
    if (unit === u) {
      return;
    }
    setUnit(u);
    onReset();
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
    <h1 style={{marginBottom: 4}}>Units</h1>
    <hr/>
    {units.map((u, i) => <Button style={{marginRight: 6, fontSize: 16, padding: '5px 12px'}} key={i} onClick={() => onToggleUnit(u)}>{u === 0 ? 'All' : u}</Button>)}
    <br/>
    <hr/>
    <Button style={{marginRight: 10, padding: '5px 12px'}} onClick={() => setOnlyMath(!onlyMath)}>{onlyMath ? 'Show All Questions' : 'Only Math Questions'}</Button>
    <Button style={{marginRight: 10, padding: '5px 12px'}} onClick={() => setAsTest(!asTest)}>{asTest ? 'Test Mode' : 'Study Mode'}</Button>
    <Button style={{marginRight: 10, padding: '5px 12px', backgroundColor: 'red'}} onClick={() => onReset()}>Reset Answers</Button>
    <h2>{unit !== 0 ? `Unit ${unit}` : 'All Questions'}{asTest ? ' Test' : `: Score: ${score} / ${questions.length}`}</h2>
    {questions.filter(q => onlyMath ? q.math : true).map((question, i) =>
    <Question mode={asTest ? (showTestResults ? 'results' : 'test') : 'study'} index={i} key={i} question={question} onChange={onResponse} selectedValue={responses.get(question.key)} />
    )}
    {asTest &&
    <div style={{marginBottom: 36}}>
    <Button style={{fontSize: 36, padding: '6px 14px'}} onClick={() => setShowTestResults(true)}>Submit</Button>
    {showTestResults &&
      <div>
        <h2>Score: {score} / {questions.length}</h2>
        <Button style={{marginRight: 10, padding: '5px 12px', backgroundColor: 'red'}} onClick={() => onReset()}>Reset Answers</Button>
      </div>
    }
    </div>
    }
  </PageContainer>
  );
};
export default Home;
