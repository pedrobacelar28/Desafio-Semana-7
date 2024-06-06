import './AgeCalculator.css'
import React, { useState } from 'react';

const AgeCalculator = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setDayError(day === '');
    setMonthError(month === '');
    setYearError(year === '');
  };

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <div className="entradas">
          <div className="input-group">
            <label htmlFor="dia" className={dayError ? 'error' : ''}>DAY</label>
            <input type="text" id="dia" name="dia" placeholder="DD" required value={day} onChange={(e) => setDay(e.target.value)} className={dayError ? 'error' : ''} />
            {dayError && <span className="error">This field is required</span>}
          </div>
          <div className="input-group">
            <label htmlFor="mes" className={monthError ? 'error' : ''}>MONTH</label>
            <input type="text" id="mes" name="mes" placeholder="MM" required value={month} onChange={(e) => setMonth(e.target.value)} className={monthError ? 'error' : ''} />
            {monthError && <span className="error">This field is required</span>}
          </div>
          <div className="input-group">
            <label htmlFor="ano" className={yearError ? 'error' : ''}>YEAR</label>
            <input type="text" id="ano" name="ano" placeholder="YYYY" required value={year} onChange={(e) => setYear(e.target.value)} className={yearError ? 'error' : ''} />
            {yearError && <span className="error">This field is required</span>}
          </div>
          <button type="submit" className="botao">
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44">
              <g fill="none" stroke="#FFF" strokeWidth="2">
                <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/>
              </g>
            </svg>
          </button>
        </div>
      </form>
      <div className="linha"></div>
      <div className="saida">
        <p><span className="--">--</span>years</p>
        <p><span className="--">--</span>months</p>
        <p><span className="--">--</span>days</p>
      </div>
    </>
  );
};

export default AgeCalculator;
