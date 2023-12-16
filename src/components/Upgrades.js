import React from 'react';
import Button from './button';

const Upgrades = ({ number, n1, n2, n3, n4, k1, k2, k3, k4, threshold1, threshold2, threshold3, threshold4, maxNumberReached, handleClicke, spellDuration }) => {
  return (
    <div className="main_up">
      <div className='main_ups'>
        <Button title="+0.1 урона за клик" number={number} n={n1} handleClick={() => handleClicke(1)} k={k1} threshold={threshold1} maxnumber={maxNumberReached} spellDuration = {spellDuration} />
        <Button title="+1$ в секунду" number={number} n={n2} handleClick={() => handleClicke(2)} k={k2} threshold={threshold2} maxnumber={maxNumberReached} spellDuration = {spellDuration} />
        <Button title="+2 DPS" number={number} n={n3} handleClick={() => handleClicke(3)} k={k3} threshold={threshold3} maxnumber={maxNumberReached} spellDuration = {spellDuration} />
        <Button title="+3.5 DPS" number={number} n={n4} handleClick={() => handleClicke(4)} k={k4} threshold={threshold4} maxnumber={maxNumberReached} spellDuration = {spellDuration} />
      </div>
    </div>
  );
};

export default Upgrades;