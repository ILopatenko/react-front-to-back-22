import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
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
  /*   return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          handleDelete={deleteFeedback}
        />
        <AboutPage link to='' />
      
     
    </Router>
    </Routes>
  ); */
  //////
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exct
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
