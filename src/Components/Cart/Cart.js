import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart =(props) => {
    const cartItem = <ul className={classes['cart-items']}>{[{id:'c1', name:'sushi', amount:2, price:16.99}].map(item => (
        <li>{item.name}</li>))}</ul>
    return <Modal onClose={props.onClose}>
        {cartItem}
        <div className={classes.total}>
            <span>Toatl Amount</span>
            <span>33.98</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;