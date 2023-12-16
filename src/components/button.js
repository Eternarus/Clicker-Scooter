

const Button = ({ title, number, n, handleClick, k, threshold, maxnumber, spellDuration}) => {
    return ( 
        <button className={`btn ${maxnumber > threshold ? 'active' : ''} ${number < n ? 'disabled' : '' || spellDuration === true ? 'disabled' : ''}`}  disabled={number < n} onClick={handleClick}>{title}<br/> Стоимость: {n.toFixed(0)}<br/> Число покупок: {k}</button>
     );
}

export default Button;