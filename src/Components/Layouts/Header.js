import React from "react";
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (<React.Fragment>
        
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onClick={props.onShow}/>
        </header>
        <div className={classes.mainImage}>
            <img src={mealsImage} alt="this is header"/>
        </div>

    </React.Fragment>)
}

export default Header;