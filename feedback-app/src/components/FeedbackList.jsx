import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.lenght === 0) {
    return <p>No any Feedbacks yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map(eachFeedback => {
        return (
          <FeedbackItem
            key={eachFeedback.id}
            item={eachFeedback}
            handleDelete={handleDelete}
          />
        );
      })}
    </div>
  );
};
FeedbackList.defaultProps = {
  feedback: false,
};
FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};
export default FeedbackList;
