import "./style.css";
import React, { useState, useEffect } from 'react';
import MainClick from "./components/MainScooter";
import CountStatistic from "./components/CountStatistic";
import Upgrades from "./components/Upgrades";

function App() {
  const [bossCount, setBossCount] = useState(1);
  const [HPCount, setHPCount] = useState(700);
  const [maxNumberReached, setMaxNumberReached] = useState(0);
  
  const [state, setState] = useState({
    number: 0,
    num: 1,
    HP: 300,
    x: 0,
    z: 0,
    n1: 50,
    n2: 150,
    n3: 300,
    n4: 500,
    threshold1: -1,
    threshold2: 100,
    threshold3: 200,
    threshold4: 400,
    k1: 0,
    k2: 0,
    k3: 0,
    k4: 0
  });

  const { number, num, z, x, n1, n2, n3, n4, k1, k2, k3, k4, HP, threshold1, threshold2, threshold3, threshold4 } = state;
  const [defense, setDefense] = useState(0)
  const shieldBosses = {
    1: 500,
    2: 1500
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setState(prevState => ({ ...prevState, number: prevState.number + x, HP: prevState.HP - x, maxnumber: prevState.maxnumber + x }));
    }, 1000);
  
    return () => clearInterval(timer);
  }, [x]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setState(prevState => ({ ...prevState, number: prevState.number + z, maxnumber: prevState.maxnumber + z }));
    }, 1000);
  
    return () => clearInterval(timer2);
  }, [z]);

  useEffect(() =>{
    if (number > maxNumberReached) {
      setMaxNumberReached(number);
    }
  })

  const handleClicke = (index) => {
    const handleClickss = [
      () => {
        if (defense > 0) {
          setDefense(prevDefense => prevDefense - num);
        } else {
          setState(prevState => ({ ...prevState, number: prevState.number + num, HP: prevState.HP - num }));
        }
      },
      
      () => {
        const purchases = 10;
        const n = k1 > purchases ? 2 : 1;
        handleClicks(0, n1, "n1", "k1", 0);
        setState(prevState => ({ ...prevState, num: num + n }));
      },
      () => handleClicks(0, n2, "n2", "k2", 1),
      () => handleClicks(2, n3, "n3", "k3", 0),
      () => handleClicks(3.5, n4, "n4", "k4", 0)
    ];

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

    handleClickss[index]();
  };

  useEffect(() => {
    if (HP <= 0) {
      setHPCount(prevCount => prevCount * 4);
      setBossCount(prevCount => prevCount + 1);
      setState(prevState => ({ ...prevState, number: prevState.number + bossCount * 500 }));
  
      if (shieldBosses.hasOwnProperty(bossCount)) {
        const shieldValue = shieldBosses[bossCount];
        setDefense(prevDefense => prevDefense + shieldValue);
      }
  
      setState(prevState => ({ ...prevState, HP: HPCount }));
    }
  }, [HP, bossCount, shieldBosses]);

  const [spellDuration, setSpellDuration] = useState(false)
  const [kdDuration, setKdDuration] = useState(false)
  const [clonNum, setClonNum] = useState(0)

const handleSpellButtonClick = () => {
  setClonNum(num)
  setState(prevState => ({ ...prevState, num: num * 2 }));
  setSpellDuration(true);
  setSeconds(10)
}

const nn = () => {
  setSpellDuration(false);
  setKdDuration(true)
  setState(prevState => ({ ...prevState, num: clonNum }));
}


const ld = () => {
  if(kdDuration){
    return true
  } else {
    return false
  }
}

  useEffect(() => {
    if (spellDuration) {
      setTimeout(() => {
        nn();
      }, 10000);
    }
  }, [spellDuration]);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let countdown;

    if (spellDuration) {
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
        <div className="container">
        <CountStatistic x = {x} num = {num} number = {number} />
        <span className="main_count" id="count">Максимальное: {maxNumberReached.toFixed(0)}$</span>
          <div className="main_inner">
            <div className="main_click">
              <span className="main_count" id="count">За 1 клик: {num.toFixed(1)} урона</span>
              <span className="main_count" id="count">За 1 секунду: {x.toFixed(1)} урона</span>
              <MainClick handleClick = {() => handleClicke(0)} number = {number} bossCount = {bossCount} />
              <span className="main_count red" id="count">HP: {HP.toFixed(0)} Защита: {defense.toFixed(0)}</span>
              <span className="main_count red" id="count">Количество убитых боссов: {bossCount - 1}</span>
            </div>
          </div>
          <div className="spells">
            <button  className= {`spell spellBtn `} onClick={handleSpellButtonClick}>1 spell<br/> {seconds == 0 ? '' : "Действие баффа: " + seconds}</button>
          </div>
        </div>
        <Upgrades       
        number={number}
        n1={n1}
        n2={n2}
        n3={n3}
        n4={n4}
        k1={k1}
        k2={k2}
        k3={k3}
        k4={k4}
        threshold1={threshold1}
        threshold2={threshold2}
        threshold3={threshold3}
        threshold4={threshold4}
        maxNumberReached={maxNumberReached}
        handleClicke={handleClicke}
        spellDuration = {spellDuration} />
      </div>
    </div>
  );
}

export default App;