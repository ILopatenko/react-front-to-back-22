import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';

import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

const FeedbackList = () => {
   const { feedback, isLoading } = useContext(FeedbackContext);
   if (!isLoading && (!feedback || feedback.lenght === 0)) {
      return <p>No any Feedbacks yet</p>;
   }
   return isLoading ? (
      <Spinner />
   ) : (
      <div className='feedback-list'>
         <AnimatePresence>
            {feedback.map(eachFeedback => {
               return (
                  <motion.div
                     key={eachFeedback.id}
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                  >
                     <FeedbackItem
                        key={eachFeedback.id}
                        item={eachFeedback}
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
