import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
   const { feedback } = useContext(FeedbackContext);
   let average =
      feedback.reduce((acc, cur) => {
         return acc + cur.rating;
      }, 0) / feedback.length;
   average = isNaN(average) ? 0 : average.toFixed(1);
   return (
      <div className='feedback-stats'>
         <h4>{feedback.length} reviews</h4>
         <h4>Average rating: {average}</h4>
      </div>
   );
};

export default FeedbackStats;
