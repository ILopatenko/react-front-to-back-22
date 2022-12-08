import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
   const [isLoading, setIsLoading] = useState(true);
   const [feedback, setFeedback] = useState([]);
   const [feedbackEdit, setFeedbackEdit] = useState({
      item: {},
      edit: false,
   });
   useEffect(() => {
      fetchFeedback();
   }, []);
   const fetchFeedback = async () => {
      const response = await fetch(
         `http://localhost:5000/feedback?_sord=id&_order=desc`
      );
      const data = await response.json();
      setFeedback(data);
      setIsLoading(false);
   };
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
   const updateFeedback = (id, updItem) => {
      setFeedback(
         feedback.map(item =>
            item.id === id ? { ...item, ...updItem } : item
         )
      );
      setFeedbackEdit({ item: {}, edit: false });
   };

   return (
      <FeedbackContext.Provider
         value={{
            feedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            deleteFeedback,
            feedbackEdit,
            isLoading,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   );
};
export default FeedbackContext;
