import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
   const [feedback, setFeedback] = useState([
      { id: 1, text: 'This is a feedback #1', rating: 10 },
      { id: 2, text: 'This is a feedback #2', rating: 9 },
      { id: 3, text: 'This is a feedback #3', rating: 8 },
      { id: 4, text: 'This is a feedback #4', rating: 7 },
      { id: 5, text: 'This is a feedback #5', rating: 6 },
   ]);
   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });
   const deleteFeedback = id => {
      if (
         window.confirm(
            'Are you sure? You are going to delete a feedback'
         )
      )
         setFeedback(feedback.filter(el => el.id !== id));
   };
   const addFeedback = feedbackObject => {
      feedbackObject.id = uuidv4();
      setFeedback([feedbackObject, ...feedback]);
   };
   const editFeedback = item => {
      setFeedbackEdit({ item, edit: true });
   };
   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};
export default FeedbackContext;
