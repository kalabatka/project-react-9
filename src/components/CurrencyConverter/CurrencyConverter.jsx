import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css';

const CurrencyConverter = ({ currency, amount, onChange }) => {
  const [rates, setRates] = useState({});
  const [converted, setConverted] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate.host/latest?base=${currency}&symbols=RUB,USD,EUR`);
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error('Ошибка при загрузке курсов валют:', error);
      }
    };
    fetchRates();
  }, [currency]);

  useEffect(() => {
    if (rates && rates.RUB && amount) {
      setConverted((amount * rates.RUB).toFixed(2));
    }
  }, [rates, amount]);

  return (
    <div className="currency-converter">
      <label htmlFor="currency">Валюта: </label>
      <select name="currency" id="currency" value={currency} onChange={onChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        {/* Добавьте другие валюты по необходимости */}
      </select>
      <label htmlFor="amount">   Сумма: </label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={onChange}
        min="0"
      />
      {converted && (
        <p>Конвертировано: {converted} RUB</p>
      )}
    </div>
  );
};

export default CurrencyConverter;