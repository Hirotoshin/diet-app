import IMealState from "../../Models/MealState";
import MealActinType from "./MealActionType";

export function addMeal(mealState: IMealState) {
  return {
    mealState,
    type: MealActinType.ADDMEAL
  };
}
