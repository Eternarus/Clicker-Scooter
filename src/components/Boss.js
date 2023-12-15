import scooter from "../img/samokat.png";
import tranformer from "../img/300_-transformed.png";
import orange from "../img/apelsin.png"

function Boss({ handleClicks, bossCount, HP1, defense }) {
  const image = getImage(bossCount);
  
  function getImage() {
    if (bossCount === 2) {
      return tranformer;
    } else if (bossCount === 3) {
      return orange;
    }

    return scooter;
  }

  return (
    <div className="main_click">
      <img src={image} alt="" className="main" onClick={handleClicks} />
      <span className="main_count">HP: {HP1.toFixed(1)} Защита: {defense.toFixed(1)}</span>
    </div>
  );
}

export default Boss;