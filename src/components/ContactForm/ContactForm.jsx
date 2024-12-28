

import React, { useState } from 'react';
import NameField from '../NameField/NameField';
import EmailField from '../EmailField/EmailField';
import MessageField from '../MessageField/MessageField';
import CurrencyConverter from '../CurrencyConverter/CurrencyConverter';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    currency: 'USD',
    amount: ''
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);
    data.append('currency', formData.currency);
    data.append('amount', formData.amount);

    try {
      const response = await fetch('ВАШ_СЕРВЕРНЫЙ_ЭНДПОЙНТ', {
        method: 'POST',
        body: data,
      });
      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          currency: 'USD',
          amount: ''
        });
      } else {
        throw new Error('Ошибка при отправке формы');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <NameField value={formData.name} onChange={handleChange} />
      <EmailField value={formData.email} onChange={handleChange} />
      <MessageField value={formData.message} onChange={handleChange} />
      <CurrencyConverter
        currency={formData.currency}
        amount={formData.amount}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
      {success && <p className="success">Форма успешно отправлена!</p>}
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default ContactForm;
