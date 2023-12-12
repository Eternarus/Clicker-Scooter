import scooter from "../img/samokat.png";
import tranformer from "../img/300_-transformed.png";
import orange from "../img/apelsin.png"



function MainClick({ handleClick, number }) {
  const slider = () => {
    return number > 1000 ? orange : number > 500 ? tranformer : scooter;
  }

    return (
      <div className="main_click" onClick={handleClick}>
        <img src={slider()} alt="" className="main" width="300px" />
      </div>
    );
  }

  export default MainClick;