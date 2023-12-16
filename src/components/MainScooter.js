import scooter from "../img/samokat.png";
import tranformer from "../img/300_-transformed.png";
import orange from "../img/apelsin.png"



function MainClick({ handleClick, bossCount }) {
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
      <div className="main_click" onClick={handleClick}>
        <img src={image} alt="" className="main" />
      </div>
    );
  }

  export default MainClick;