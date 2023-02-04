import React, {Fragment} from "react";
import MealsSummary from "./MealSummary";
import AvailableMeals from "./AvailabaleMeals";

const Meals = (props) => {
    return (<Fragment>
    <MealsSummary />
    <AvailableMeals />
    </Fragment>)
}

export default Meals;