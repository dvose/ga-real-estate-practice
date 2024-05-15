import { Question as QuestionType } from "Constants";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin-bottom: 16px;
  font-size: 1.4em;
`;

const StyledRadioLabel = styled.label<{selected?: boolean, correctAnswer :boolean}>`
  font-weight: ${props => props.selected ? 'bold' : 'initial'};
  color: ${props => {
    if(!props.selected) {
      return 'inherit';
    }
    if(props.correctAnswer) {
      return 'green';
    }
    return 'red';
  }}
`;

type QuestionProps = {
  index: number;
  question: QuestionType;
  selectedValue?: string;
  onChange: (questionKey: string, answer: string) => void;
};
const Question = ({index, question, selectedValue, onChange}: QuestionProps) => (
  <StyledContainer>
    <div>{index + 1}) {question.body}</div>
    {question.answers && question.answers.map((answer, i) =>
    <div className="radio" key={i}>
      <StyledRadioLabel correctAnswer={question.correctAnswer === answer} selected={selectedValue === answer}>
        <input type="radio" value={answer} checked={selectedValue === answer} onChange={() => onChange(question.key, answer)} />
        {answer}
      </StyledRadioLabel>
    </div>
    )}
  </StyledContainer>
);
export default Question;