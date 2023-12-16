import React, { useEffect } from 'react';

const Timer = ({ DPS, moneyPerSecond,  defense, setState }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (defense > 0) {
      } else {
        setState(prevState => ({
          ...prevState,
          number: prevState.number + DPS,
          HP: prevState.HP - DPS,
          maxnumber: prevState.maxnumber + DPS
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [DPS, defense, setState]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setState(prevState => ({
        ...prevState,
        number: prevState.number + moneyPerSecond,
        maxnumber: prevState.maxnumber + moneyPerSecond
      }));
    }, 1000);

    return () => clearInterval(timer2);
  }, [moneyPerSecond]);

  return null;
};

export default Timer;