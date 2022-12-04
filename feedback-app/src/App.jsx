import { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {
  const [feedback, setFeedback] =
    useState(FeedbackData);
  const deleteFeedback = id => {
    console.log(
      `You have clicked on delete button for feedback with ID = "${id}"`
    );
    if (
      window.confirm(
        'Are you sure? You are going to delete a feedback'
      )
    )
      setFeedback(
        feedback.filter(el => el.id !== id)
      );
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
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
