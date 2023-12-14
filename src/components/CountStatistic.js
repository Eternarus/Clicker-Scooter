import "../style.css"

function CountStatistic({ number, num, x, maxNumberReached, clonNum, bossCount, z }) {
    return (
      <div className="main_statistic">
        <div className="CountStatistic">
          <span className="main_count" id="count">{number.toFixed(0)}$</span>
          <span className="main_count" id="count">Максимальное: {maxNumberReached.toFixed(0)}$</span>
              <span className="main_count" id="count">За 1 клик: {(clonNum + num).toFixed(1)} урона</span>
              <span className="main_count" id="count">DPS: {x.toFixed(1)} урона</span>
              <span className="main_count" id="count">Денег в секунду: {z.toFixed(1)}$</span>
              <span className="main_count red" id="count">Количество убитых боссов: {bossCount - 1}</span>
        </div>
      </div>
    );
}

export default CountStatistic;