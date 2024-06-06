import './AgeCalculator.css'
import React, { useState, useEffect } from 'react';

const AgeCalculator = () => {
  return (
    <>
      <form action="submit_payment.php" method="post">
        <div className="entradas">
          <div className="input-group">
            <label htmlFor="dia">DAY</label>
            <input type="text" id="dia" name="dia" placeholder="DD" required />
          </div>
          <div className="input-group">
            <label htmlFor="mes">MONTH</label>
            <input type="text" id="mes" name="mes" placeholder="MM" required />
          </div>
          <div className="input-group">
            <label htmlFor="ano">YEAR</label>
            <input type="text" id="ano" name="ano" placeholder="YYYY" required />
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
        <p>--years</p>
        <p>--months</p>
        <p>--days</p>
      </div>
    </>
  );
};

export default AgeCalculator;
