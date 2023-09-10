import { ButtonList, Buttton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {options.map((el, index) => (
        <li key={index}>
          <Buttton type="button" onClick={() => onLeaveFeedback(el)}>
            {el}
          </Buttton>
        </li>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
