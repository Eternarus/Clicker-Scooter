import scooter from "../img/samokat.png";

function MainClick({ handleClick }) {
    return (
      <div className="main_click">
        <img src={scooter} alt="" className="main" width="500px" onClick={handleClick} />
      </div>
    );
  }

  export default MainClick;