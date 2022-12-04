import PropTypes from 'prop-types';
import Card from './shared/Card';
import Button from './shared/Button';

import { useState } from 'react';
const FeedbackForm = props => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = e => {
    if (text.length === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would yoy rate service with us?</h2>
        {/*  TODO: rating select component*/}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};
FeedbackForm.propTypes = {};
export default FeedbackForm;
