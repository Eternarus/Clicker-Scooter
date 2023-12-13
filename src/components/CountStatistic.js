import "../style.css"

function CountStatistic({ number, num, x }) {
    return (
      <div className="CountStatistic">
        <span className="main_count" id="count">{number.toFixed(0)}$</span>
      </div>
    );
}

export default CountStatistic;