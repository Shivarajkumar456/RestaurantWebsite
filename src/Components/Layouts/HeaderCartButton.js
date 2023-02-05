import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numofCartItems = cartCtx.items.reduce((curNum, item)=>{
        return curNum + Number(item.quantity);
    }, 0)
    return (
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numofCartItems}</span>
        </button>
    )
}

export default HeaderCartButton;