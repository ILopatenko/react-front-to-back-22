import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = ({ handleDelete }) => {
   const { feedback } = useContext(FeedbackContext);
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

export default FeedbackList;
