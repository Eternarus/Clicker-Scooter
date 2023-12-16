import React, {
    useState,
    useEffect
} from 'react';

function Spell({
    setSpellDuration,
    spellDuration,
    num,
    setClonNum
}) {
    const [kdSeconds, setKdSeconds] = useState(180);
    const [kdDuration, setKdDuration] = useState(false);
    const [seconds, setSeconds] = useState(0);

    const handleSpellButtonClick = () => {
        setClonNum(num);
        setSpellDuration(true);
        setSeconds(10);
    };

    const spellOff = () => {
        setSpellDuration(false);
        setKdDuration(true);
        setClonNum(0);
        setSeconds(180);
    };

    const spellOn = () => {
        setKdDuration(false);
        setSpellDuration(true);
    };

    useEffect(() => {
        if (spellDuration) {
            setTimeout(() => {
                spellOff();
            }, 10000);
        }
        if (kdDuration) {
            setTimeout(() => {
                spellOn();
            }, 180000);
        }
    }, [spellDuration, kdDuration]);

    useEffect(() => {
        let countdown;

        if (spellDuration || kdDuration) {
            countdown = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds - 1);
            }, 1000);
        }

        if (seconds < 0) {
            clearInterval(countdown);
        }

        return () => clearInterval(countdown);
    }, [spellDuration]);

    return ( 
        <div className="spells">
            <button className={`spell spellBtn`} disabled={kdDuration} onClick={handleSpellButtonClick}>x2 damage<br/> {seconds === 0 ? '' : "Длительность: " + seconds}</button>
        </div>
    );
  }
  
  export default Spell;