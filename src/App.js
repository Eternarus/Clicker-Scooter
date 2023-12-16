import "./style.css";
import React, { useState, useEffect } from 'react';
import CountStatistic from "./components/CountStatistic";
import Upgrades from "./components/Upgrades";
import Boss from "./components/Boss";
import Timer from "./components/Timer";
import Spell from "./components/Spell";
import BossDefeatLogic from "./components/BossDefeatLogic";

function App() {
  const [bossCount, setBossCount] = useState(1);
  const [HPCount, setHPCount] = useState(500);
  const [maxNumberReached, setMaxNumberReached] = useState(0);
  const [clonNum, setClonNum] = useState(0);
  const [spellDuration, setSpellDuration] = useState(false);

  const [state, setState] = useState({
    number: 0,
    num: 100,
    HP: 150,
    DPS: 0,
    moneyPerSecond: 0,
    upgradesData: {
      n1: 5,
      n2: 25,
      n3: 30,
      n4: 50,
      threshold1: -1,
      threshold2: 10,
      threshold3: 25,
      threshold4: 40,
      k1: 0,
      k2: 0,
      k3: 0,
      k4: 0
    }
  });

  const {
    number,
    num,
    moneyPerSecond,
    DPS,
    HP,
    upgradesData: { n1, n2, n3, n4 }
  } = state;
  const [defense, setDefense] = useState(0);
  const shieldBosses = {
    1: 500,
    2: 1500
  };

  const handleClicks = (n, moneyPerSecond, cost, k, p) => {
    setState(prevState => ({
      ...prevState,
      DPS: prevState.DPS + n,
      moneyPerSecond: prevState.moneyPerSecond + p,
      upgradesData: {
        ...prevState.upgradesData,
        [k]: prevState.upgradesData[k] + 1,
        [cost]: prevState.upgradesData[cost] * 1.5
      },
      number: prevState.number - moneyPerSecond,
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
            number: prevState.number + num + clonNum,
            HP: Math.max(prevState.HP - num - clonNum, 0),
            defense: 0
          }));
        }
      },
      () => {
        const n = 0.1;
        handleClicks(0, state.upgradesData.n1, "n1", "k1", 0);
        setState(prevState => ({
          ...prevState,
          num: num + n
        }));
      },
      () => handleClicks(0, n2, "n2", "k2", 0.5),
      () => handleClicks(1, n3, "n3", "k3", 0),
      () => handleClicks(2.5, n4, "n4", "k4", 0)
    ];

    handleClickss[index]();
  };

  function formatNumber(number) {
    if (number < 1000) {
      return number.toFixed(1);
    } else if (number < 1000000) {
      return (number / 1000).toFixed(1) + "k";
    } else if (number < 1000000000) {
      return (number / 1000000).toFixed(1) + "m";
    } else {
      return (number / 1000000000).toFixed(1) + "b";
    }
  }

  const gg = formatNumber(number)

  return (
    <div>
      <div className="mains">
        <CountStatistic DPS={DPS} num={num} number={gg} maxNumberReached={maxNumberReached} clonNum={clonNum} bossCount={bossCount} moneyPerSecond={moneyPerSecond} setMaxNumberReached={setMaxNumberReached} />
        <div className="main_inner">
          <Spell setSpellDuration={setSpellDuration} spellDuration={spellDuration} num={num} setClonNum={setClonNum} />
          <Boss handleClicks={() => handleClicke(0)} bossCount={bossCount} HP1={HP} defense={defense} />
        </div>
        <Upgrades number={gg} upgradesData={state.upgradesData} maxNumberReached={maxNumberReached} handleClicke={handleClicke} spellDuration={spellDuration} />
      </div>
      <div>
        <Timer DPS={DPS} moneyPerSecond={moneyPerSecond} defense={defense} setState={setState} />
        <BossDefeatLogic HPCount={HPCount} HP={HP} setHPCount={setHPCount} bossCount={bossCount} setBossCount={setBossCount} setState={setState} setDefense={setDefense} shieldBosses={shieldBosses} />
      </div>
    </div>
  );
}

export default App;
