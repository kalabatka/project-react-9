import React from 'react';
import './MessageField.css';

const MessageField = ({ value, onChange }) => (
  <div className="form-field">
    <label htmlFor="message">message: </label>
    <input
      type="text"
      id="message"
      name="message"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default MessageField;