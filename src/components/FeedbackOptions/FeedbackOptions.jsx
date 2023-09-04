import { ButtonList, Buttton } from './FeedbackOptions.styled';
const FeedbackOptions = ({ onGood, onNeutral, onBad }) => {
  return (
    <ButtonList>
      <li>
        <Buttton type="button" onClick={onGood}>
          Good
        </Buttton>
      </li>
      <li>
        <Buttton type="button" onClick={onNeutral}>
          Neutral
        </Buttton>
      </li>
      <li>
        <Buttton type="button" onClick={onBad}>
          Bad
        </Buttton>
      </li>
    </ButtonList>
  );
};

export default FeedbackOptions;
