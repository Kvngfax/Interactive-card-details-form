import React, { useState } from 'react';
import './CardForm.css';
import cardImage from './images/card-logo.svg';
import check from './images/icon-complete.svg';

function CardForm() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvc, setCvc] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCardNumberChange = (e) => {
    let formattedCardNumber = e.target.value.replace(/\D/g, '').slice(0, 16); // Remove existing spaces
    let newFormattedCardNumber = '';

    for (let i = 0; i < formattedCardNumber.length; i++) {
      if (i > 0 && i % 4 === 0) {
        newFormattedCardNumber += ' '; // Add space after every four digits
      }
      newFormattedCardNumber += formattedCardNumber[i];
    }

    setCardNumber(newFormattedCardNumber);
  };

  const handleMonthChange = (e) => {
    let formattedMonth = e.target.value.replace(/\D/g, '').slice(0, 2); // Remove non-digits and limit to 2 digits
    setMonth(formattedMonth);
  };

  const handleYearChange = (e) => {
    let formattedYear = e.target.value.replace(/\D/g, '').slice(0, 2); // Remove non-digits and limit to 2 digits
    setYear(formattedYear);
  };

  const handleCvcChange = (e) => {
    let formattedCvc = e.target.value.replace(/\D/g, '').slice(0, 3); // Remove non-digits and limit to 2 digits
    setCvc(formattedCvc);
  };

  const validateForm = () => {
    const newErrors = {};

    if (name.trim() === '') {
      newErrors.name = 'Name cannot be blank';

    }

    if(cardNumber.trim() === '') {
      newErrors.cardNumber = 'Card number cannot be blank';
    }

    const expiryPattern = /^\d{2}$/;
    if (!expiryPattern.test(month) || !expiryPattern.test(year)) {
      newErrors.expiry = 'Invalid expiry date';
    } else {
      const currentMonth = new Date().getMonth() + 1; // Get current month (1-12)
      const currentYear = new Date().getFullYear() % 100; // Get current year (last two digits)

      const enteredMonth = parseInt(month, 10);
      const enteredYear = parseInt(year, 10);

      if (enteredMonth < 1 || enteredMonth > 12) {
        newErrors.expiry = 'Invalid month';
      } else if (
        enteredYear < currentYear ||
        (enteredYear === currentYear && enteredMonth < currentMonth)
      ) {
        newErrors.expiry = 'Invalid expiry date';
      }
    }

    const cvcPattern = /^\d{3}$/;
    if (!cvcPattern.test(cvc)) {
      newErrors.cvc = 'Invalid CVC format';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setIsFormSubmitted(true);

      setTimeout(() => {
        setSuccess(true);
        setErrors({});
        setIsFormSubmitted(false);
        // Perform form submission logic
        // Reset the form or show success message
      }, 500);
    }
  };
  

  return (
    <div className="container">
      <div className={`side1 ${success ? 'success' : ''}`}>
        <div className="frontCard">
          <img src={cardImage} alt="Card logo" />
          <h1 className={`cardNumber ${errors.cardNumber ? 'error' : ''}`}>
            {cardNumber || '0000 0000 0000 0000'}
          </h1>
          <div>
            <p className={`cardholderName ${errors.name ? 'error' : ''}`}>
              {name || 'Jane Appleseed'}
            </p>
            <p className={`monthYear ${errors.expiry ? 'error' : ''}`}>
              {`${month || 'MM'}/${year || 'YY'}`}
            </p>
          </div>
        </div>
        <div className="backCard">
          <p className={`cvcNumber ${errors.cvc ? 'error' : ''}`}>
            {cvc || '000'}
          </p>
        </div>
      </div>

      <div className={`side2 ${success ? 'success' : ''}`}>
        {!success ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="cardholder-name">Cardholder Name</label>
              <input
                type="text"
                id="cardholder-name"
                value={name}
                onChange={handleNameChange}
                className={errors.name ? 'error' : ''}
                placeholder="e.g. Jane Appleseed"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="card-number">Card Number</label>
              <input
                type="text"
                id="card-number"
                value={cardNumber}
                onChange={handleCardNumberChange}
                className={errors.cardNumber ? 'error' : ''}
                placeholder="e.g. 1234 5678 9123 0000"
              />

              {errors.cardNumber && (
                <p className="error-message">{errors.cardNumber}</p>
              )}
            </div>

            <div className="lastRow">
              <div id="date">
                <label htmlFor="expiry-date">Exp. Date (MM/YY)</label>
                <div className="expiryDate">
                  <input
                    type="text"
                    id="expiry-date"
                    value={month}
                    onChange={handleMonthChange}
                    className={errors.expiry ? 'error' : ''}
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    id="expiry-date"
                    value={year}
                    onChange={handleYearChange}
                    className={errors.expiry ? 'error' : ''}
                    placeholder="YY"
                  />
                </div>
                {errors.expiry && (
                  <p className="error-message">{errors.expiry}</p>
                )}
              </div>
              <div className="cvc">
                <label htmlFor="cvc">CVC</label>
                <input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={handleCvcChange}
                  className={errors.cvc ? 'error' : ''}
                  placeholder="e.g. 123"
                />
                {errors.cvc && <p className="error-message">{errors.cvc}</p>}
              </div>
            </div>

            <button type="submit" disabled={isFormSubmitted}>
              <h4>{isFormSubmitted ? 'Submitting...' : 'Confirm'}</h4>
            </button>
          </form>
        ) : (
          <div className="success-message">
            <img src={check} alt='icon'/>
            <h3>THANK YOU!</h3>
            <p>We've added your card details</p>
            <button onClick={() => window.location.reload()}>Continue</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardForm;
