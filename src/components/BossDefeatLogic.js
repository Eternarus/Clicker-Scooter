import React, { useEffect } from 'react';

const BossDefeatLogic = ({ HP, setHPCount, bossCount, setBossCount, setState, setDefense, shieldBosses, HPCount }) => {
  useEffect(() => {
    if (HP <= 0) {
      setHPCount(prevCount => prevCount * 4);
      setBossCount(prevCount => prevCount + 1);
      setState(prevState => ({
        ...prevState,
        number: prevState.number + (HPCount / 4) * 1.5
      }));

      if (shieldBosses.hasOwnProperty(bossCount)) {
        const shieldValue = shieldBosses[bossCount];
        setDefense(prevDefense => prevDefense + shieldValue);
      }

      setState(prevState => ({
        ...prevState,
        HP: HPCount
      }));
    }
  }, [HP, bossCount, shieldBosses]);

  return null;
};

export default BossDefeatLogic;
