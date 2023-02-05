import React, {useContext} from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext)
    const addItemtoCart = (event)=>{
        event.preventDefault();
        const quantity = document.getElementById('amount_' + props.id).value;
        cartCtx.addItem({...props.item, quantity:quantity})
    }
    return <form className={classes.form}>
        <Input label="Amount" input={{
            id:'amount_' + props.id,
            type:'number',
            min:1,
            max:5,
            step:1,
            defaultValue:1
        }} />
        <div>
        <button onClick={addItemtoCart}>+Add</button>
        </div>
    </form>
}

export default MealItemForm;