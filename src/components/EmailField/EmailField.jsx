import React from 'react';
import './EmailField.css';

const EmailField = ({ value, onChange }) => (
  <div className="form-field">
    <label htmlFor="email">email: </label>
    <input
      type="email"
      id="email"
      name="email"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default EmailField;