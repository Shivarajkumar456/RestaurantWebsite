import React, {useContext} from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart =(props) => {
    const cartCtx = useContext(CartContext);
    const cartItem = <ul className={classes['cart-items']}>{cartCtx.items.map(item => (
        <li>Item: {item.name} Price:{item.price} Quantity:{item.quantity}</li>))}</ul>
    const totalAmount = cartCtx.items.reduce((curTotal,item)=> {
        return curTotal += item.price;
    },0)
    return <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>Toatl Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;