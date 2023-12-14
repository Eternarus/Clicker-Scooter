import "./style.css";
import React, { useState, useEffect } from 'react';
import CountStatistic from "./components/CountStatistic";
import Upgrades from "./components/Upgrades";
import Boss from "./components/Boss";
import Spell from "./components/Spell";

function App() {
  const [bossCount, setBossCount] = useState(1);
  const [HPCount, setHPCount] = useState(700);
  const [maxNumberReached, setMaxNumberReached] = useState(0);
  const [clonNum, setClonNum] = useState(0);
  const [spellDuration, setSpellDuration] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const [state, setState] = useState({
    number: 0,
    num: 0.1,
    HP: 300,
    x: 0,
    z: 0,
    n1: 5,
    n2: 20,
    n3: 40,
    n4: 80,
    threshold1: -1,
    threshold2: 10,
    threshold3: 25,
    threshold4: 70,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0
  });

  const { number, num, z, x, n1, n2, n3, n4, k1, k2, k3, k4, HP, threshold1, threshold2, threshold3, threshold4 } = state;
  const [defense, setDefense] = useState(0);
  const shieldBosses = {
    1: 500,
    2: 1500
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if(defense > 0){

      }else {
        setState(prevState => ({
          ...prevState,
          number: prevState.number + x,
          HP: prevState.HP - x,
          maxnumber: prevState.maxnumber + x
        }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [x, defense]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setState(prevState => ({
        ...prevState,
        number: prevState.number + z,
        maxnumber: prevState.maxnumber + z
      }));
    }, 1000);

    return () => clearInterval(timer2);
  }, [z]);

  useEffect(() => {
    if (number > maxNumberReached) {
      setMaxNumberReached(number);
    }
  }, [number]);

  const handleClicks = (n, z, cost, k, p) => {
    setState(prevState => ({
      ...prevState,
      x: prevState.x + n,
      z: prevState.z + p,
      [k]: prevState[k] + 1,
      number: prevState.number - z,
      [cost]: prevState[cost] * 1.1
    }));
  };

  const handleClicke = (index) => {

    const handleClickss = [
      () => {
        if (defense > 0) {
          setDefense(prevDefense => Math.max(prevDefense - num - clonNum, 0));
        } else {
          setState(prevState => ({
            ...prevState,
            number: prevState.number + num,
            HP: Math.max(prevState.HP - num - clonNum, 0),
            defense: 0
          }));
        }
      },
      () => {
        const n = 0.1;
        handleClicks(0, n1, "n1", "k1", 0);
        setState(prevState => ({ ...prevState, num: num + n }));
      },
      () => handleClicks(0, n2, "n2", "k2", 1),
      () => handleClicks(2, n3, "n3", "k3", 0),
      () => handleClicks(3.5, n4, "n4", "k4", 0)
    ];

    handleClickss[index]();
  };

  useEffect(() => {
    if (HP <= 0) {
      setHPCount(prevCount => prevCount * 4);
      setBossCount(prevCount => prevCount + 1);
      setState(prevState => ({
        ...prevState,
        number: prevState.number + bossCount * 500
      }));

      if (shieldBosses.hasOwnProperty(bossCount)) {
        const shieldValue = shieldBosses[bossCount];
        setDefense(prevDefense => prevDefense + shieldValue);
      }

      setState(prevState => ({ ...prevState, HP: HPCount }));
    }
  }, [HP, bossCount, shieldBosses]);

  const [kdDuration, setKdDuration] = useState(false);

  const handleSpellButtonClick = () => {
    setClonNum(num);
    setSpellDuration(true);
    setSeconds(10);
  };

  const spellOff = () => {
    setSpellDuration(false);
    setKdDuration(true);
    setClonNum(0);
    setSeconds(180);
  };

  const spellOn = () => {
    setKdDuration(false);
  };

  useEffect(() => {
    if (spellDuration) {
      setTimeout(() => {
        spellOff();
      }, 10000);
    }
    if (kdDuration) {
      setTimeout(() => {
        spellOn();
      }, 180000);
    }
  }, [spellDuration, kdDuration]);

  useEffect(() => {
    let countdown;

    if (spellDuration || kdDuration) {
      countdown = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    }

    if (seconds < 0) {
      clearInterval(countdown);
    }

    return () => clearInterval(countdown);
  }, [spellDuration]);

  return (
    <div>
      <div className="mains">
          <CountStatistic x={x} num={num} number={number} maxNumberReached={maxNumberReached} clonNum={clonNum} bossCount={bossCount} z={z}/>
        <div className="main_inner">
          <div className="spells">
           <Spell handleSpellButtonClick={handleSpellButtonClick} seconds={seconds} kdDuration={kdDuration} />
          </div>
          <Boss handleClicks={() => handleClicke(0)} bossCount={bossCount} HP1={HP} defense={defense} number={number} />
        </div>
        <Upgrades number={number} n1={n1} n2={n2} n3={n3} n4={n4} k1={k1} k2={k2} k3={k3} k4={k4} threshold1={threshold1} threshold2={threshold2} threshold3={threshold3} threshold4={threshold4} maxNumberReached={maxNumberReached} handleClicke={handleClicke} spellDuration={spellDuration} />
      </div>
    </div>
);
}

export default App;
