import React, { useState, useEffect } from 'react';

function TimerApp(timerActive) {

  const [timer2Active, setTimer2Active] = useState(false);

  useEffect(() => {
    if (timerActive) {
      const timer1 = setTimeout(() => {
        setTimer2Active(true);
      }, 10000);

      return () => clearTimeout(timer1);
    }
  }, [timerActive]);

  useEffect(() => {
    if (timer2Active) {
      const timer2 = setTimeout(() => setTimer2Active(false), 180000);

  return () => clearTimeout(timer2);
}
}, [timer2Active]);

function Timer({ seconds }) {
    const [remainingSeconds, setRemainingSeconds] = useState(seconds);
  
    useEffect(() => {
      if (remainingSeconds > 0) {
        const timer = setTimeout(() => {
          setRemainingSeconds(remainingSeconds - 1);
        }, 1000);
  
        return () => clearTimeout(timer);
      }
    }, [remainingSeconds]);
  
    return <p>Timer: {remainingSeconds} seconds</p>;
  }


return (
<div>
    {timerActive && <Timer seconds={10} />}
    {timer2Active && <p>Откат: 180 seconds</p>}
</div>
)};

export default TimerApp;