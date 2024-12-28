import React from 'react';
import './NameField.css';

const NameField = ({ value, onChange }) => (
  <div className="form-field">
    <label htmlFor="name">Имя: </label>
    <input
      type="text"
      id="name"
      name="name"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

export default NameField;