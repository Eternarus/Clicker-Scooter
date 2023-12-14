import MainClick from "./MainScooter";

function Boss({ handleClicks, bossCount, HP1, defense, number }) {
  const handleClick = () => {
    const result = handleClicks();
    return result;
  };

  return (
    <div className="main_click">
      <MainClick handleClick={handleClick} number={number} bossCount={bossCount} />
      <span className="main_count">HP: {HP1.toFixed(1)} Защита: {defense.toFixed(1)}</span>
    </div>
  );
}

export default Boss;