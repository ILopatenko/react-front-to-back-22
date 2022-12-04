import PropTypes from 'prop-types';
import Card from './shared/Card';
import Button from './shared/Button';

import { useState } from 'react';
const FeedbackForm = props => {
  const [text, setText] = useState('');
  const handleTextChange = e => {
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>
          How would yoy rate service with us?
        </h2>
        {/*  TODO: rating select component*/}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};
FeedbackForm.propTypes = {};
export default FeedbackForm;
