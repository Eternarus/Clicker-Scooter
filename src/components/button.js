const Button = ({ title, number, n, handleClick, k }) => {

    return ( 
        <button className="btn cl" disabled={number < n} onClick={handleClick}>{title}. Стоимость: {n.toFixed(0)} Число покупок: {k}</button>
     );
}

export default Button;