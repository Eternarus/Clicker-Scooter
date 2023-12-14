function Spell({ handleSpellButtonClick, seconds, kdDuration }) {
    return ( 
        <div>
            <button className={`spell spellBtn`} disabled={kdDuration} onClick={handleSpellButtonClick}>x2 damage<br/> {seconds === 0 ? '' : "Длительность: " + seconds}</button>
        </div>
    );
  }
  
  export default Spell;