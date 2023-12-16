import "../style.css"
import React, {useEffect} from "react";

function CountStatistic({ number, num, DPS, maxNumberReached, clonNum, bossCount, setMaxNumberReached, moneyPerSecond }) {

  useEffect(() => {
    if (number > maxNumberReached) {
      setMaxNumberReached(number);
    }
  }, [number]);

    return (
      <div className="main_statistic">
        <div className="CountStatistic">
          <span className="main_count cs" id="count">{number}$</span>
          <span className="main_count" id="count">За 1 клик: {(clonNum + num).toFixed(1)} урона</span>
          <span className="main_count" id="count">DPS: {DPS.toFixed(1)} урона</span>
          <span className="main_count" id="count">Денег в секунду: {moneyPerSecond.toFixed(1)}$</span>
          <span className="main_count red" id="count">Количество убитых боссов: {bossCount - 1}</span>
        </div>
      </div>
    );
}

export default CountStatistic;