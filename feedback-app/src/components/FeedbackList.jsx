import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';
const FeedbackList = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.lenght === 0) {
    return <p>No any Feedbacks yet</p>;
  }
  //Default version without any animation
  /* return (
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
  ); */
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map(eachFeedback => {
          return (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={eachFeedback.id}
                item={eachFeedback}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
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
