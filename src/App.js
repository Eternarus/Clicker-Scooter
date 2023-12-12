import "./style.css";
import React, { useState, useEffect } from 'react';
import Button from "./components/button";
import MainClick from "./components/MainScooter";
import CountStatistic from "./components/CountStatistic";

function App() {
  const [state, setState] = useState({
    number: 0,
    num: 1,
    x: 0,
    n1: 0,
    n2: 50,
    n3: 150,
    n4: 300,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0
  });

  const { number, num, x, n1, n2, n3, n4, k1, k2, k3, k4 } = state;

   useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => ({ ...prevState, number: prevState.number + x }));
    }, 1000);

    return () => clearInterval(timer);
  }, [x]);

  const handleClicke = (index) => {
    const handleClickss = [
      () => setState(prevState => ({ ...prevState, number: prevState.number + num })),
      () => {
        const purchases = 10;
        const n = k1 > purchases ? 2 : 1;
        handleClicks(0, n1, "n1", "k1");
        setState(prevState => ({ ...prevState, num: num + n }));
      },
      () => handleClicks(1, n2, "n2", "k2"),
      () => handleClicks(2, n3, "n3", "k3"),
      () => handleClicks(3, n4, "n4", "k4")
    ];

    const handleClicks = (n, z, cost, k) => {
      setState(prevState => ({
        ...prevState,
        x: prevState.x + n,
        [k]: prevState[k] + 1,
        number: prevState.number - n,
        [cost]: prevState[cost] * 1.5
      }));
    };

    handleClickss[index]();
  };

  return (
    <div>
      <div className="mains">
        <div className="container">
          <div className="main_inner">
            <div className="main_click">
              <span className="main_count" id="count">За 1 клик: {num.toFixed(0)}</span>
              <span className="main_count" id="count">За 1 секунду: {x.toFixed(0)}</span>
              <MainClick handleClick = {() => handleClicke(0)} />
              <CountStatistic x = {x} num = {num} number = {number} />
            </div>
          </div>
        </div>
        <div className="main_up">
          <Button title="Деревянный самокат" number={number} n={n1} handleClick={() => handleClicke(1)} k={k1} />
          <Button title="Медный самокат" number={number} n={n2} handleClick={() => handleClicke(2)} k={k2} />
          <Button title="Железный самокат" number={number} n={n3} handleClick={() => handleClicke(3)} k={k3} />
          <Button title="Стальной самокат" number={number} n={n4} handleClick={() => handleClicke(4)} k={k4} />
        </div>
      </div>
    </div>
  );
}

export default App;
