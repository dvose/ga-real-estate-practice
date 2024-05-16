import { Question as QuestionType } from "Constants";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid black;
  font-size: 1.4em;
`;

const StyledRadioLabel = styled.label<{mode?: 'test' | 'study' | 'results', selected?: boolean, correctAnswer :boolean}>`
  display: block;
  margin-top: 8px;
  padding: 8px;
  font-size: .9em;
  border: 1.5px solid transparent;
  cursor: pointer;
  border-radius: 6px;
  font-weight: ${props => props.selected ? 'bold' : 'initial'};
  color: ${props => {
    if(!props.selected || (props.mode === 'test')) {
      return 'inherit';
    }
    if(props.correctAnswer) {
      return 'green';
    }
    return 'red';
  }};
  border-color:
    ${props => {
    if(!props.selected) {
      return 'transparent';
    }
    if (props.mode === 'test') {
      return 'black'
    }
    if(props.correctAnswer) {
      return 'green';
    }
    return 'red';
  }};
  &:hover {
    border-color: ${props => {
    if(!props.selected) {
      return 'black';
    }
    if (props.mode === 'test') {
      return 'black';
    }
    if(props.correctAnswer) {
      return 'green';
    }
    return 'red';
  }};
  }
`;

type QuestionProps = {
  index: number;
  question: QuestionType;
  selectedValue?: string;
  mode?: 'test' | 'study' | 'results';
  onChange: (questionKey: string, answer: string) => void;
};
const Question = ({mode, index, question, selectedValue, onChange}: QuestionProps) => (
  <StyledContainer>
    <div>{index + 1}) {question.body}</div>
    {question.image &&
    <div style={{marginTop: '12px'}}>
      <img src={question.image} alt="question"/>
    </div>
    }
    {question.answers && question.answers.map((answer, i) =>
    <div className="radio" key={i}>
      <StyledRadioLabel mode={mode} correctAnswer={question.correctAnswer === answer} selected={selectedValue === answer}>
        <input type="radio" value={answer} checked={selectedValue === answer} onChange={() => onChange(question.key, answer)} />
        {answer}
      </StyledRadioLabel>
    </div>
    )}
  </StyledContainer>
);
export default Question;