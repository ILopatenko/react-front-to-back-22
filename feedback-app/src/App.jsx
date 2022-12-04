import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
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
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
      </div>
    </>
  );
};
export default App;
